import { NextResponse } from "next/server";
import connectToDatabase from "@/configs/db";
import Admin from "@/models/admin.model";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();
    await connectToDatabase();

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return NextResponse.json(
        { message: "Admin already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      username,
      email,
      password: hashedPassword,
    });
    await newAdmin.save();

    return NextResponse.json(
      {
        message: "Admin created successfully",
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
      {
        status: 500,
      }
    );
  }
}
