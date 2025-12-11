import { NextResponse } from "next/server";
import connectToDatabase from "@/configs/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    await connectToDatabase();

    //find existing user
    try {
      const user = await User.findOne({ email });
      if (user) {
        console.log(user);
        console.log(user.password);
      } else {
        return NextResponse.json(
          {
            message: "Unregistered",
          },
          {
            status: 404,
          }
        );
      }
      //checks pass
      const isMatched = await bcrypt.compare(password, user.password);
      if (isMatched) {
        const payload = {
          id: user._id,
          email: user.email,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        const response = NextResponse.json(
          {
            message: "Login Successful",
            token,
          },
          {
            status: 200,
          }
        );
        try {
          response.cookies.set("authToken", token, {
            httpOnly: true, // Recommended for security
            secure: process.env.NODE_ENV === "production", // Use HTTPS in production
            maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
            path: "/",
          });
        } catch (err) {
          console.log("cookie setting error", err);
        }

        return response;
      } else {
        return NextResponse.json(
          {
            message: "Invalid Credentials",
          },
          {
            status: 401,
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
