import { NextResponse } from "next/server";
import connectToDatabase from "@/configs/db";
import Admin from "@/models/admin.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    await connectToDatabase();

    try {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return NextResponse.json(
          {
            message: "Unregistered",
          },
          {
            status: 404,
          }
        );
      }

      const isMatched = await bcrypt.compare(password, admin.password);
      if (isMatched) {
        const payload = {
          id: admin._id,
          email: admin.email,
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
          response.cookies.set("adminAuthToken", token, {
            httpOnly: true, // Recommended for security
            secure: process.env.NODE_ENV === "production", // Use HTTPS in production
            maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
            path: "/",
          });
        } catch (error) {
          console.log("cookie setting error", error);
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
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
