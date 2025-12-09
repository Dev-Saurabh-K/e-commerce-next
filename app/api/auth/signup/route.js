import { NextResponse } from "next/server";
import connectToDatabase from "@/configs/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();
    console.log(username,email,password);
    await connectToDatabase();

    //if user already exists----------
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    //hash password-----------
    const hashedPassword = await bcrypt.hash(password, 10);

    //create new user-------- i m using user.save and new User instead of user.create-----
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      {
        message: "User created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
