import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "./models/user.model";

export async function proxy(request) {
  const token = request.cookies.get("authToken");

  if (!token) {
    return NextResponse.json({ error: "No token found" }, { status: 401 });
  }

  const tokenValue = token.value;

  const { email } = jwt.verify(tokenValue, process.env.JWT_SECRET);

  try {
    const isVerified = await User.find({ email });
    if (isVerified) {
      return NextResponse.next();
    }else{
      return NextResponse.json(
        {message:"Unauthorised or Unregistered"},
        {status:404}
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message:"Unauthorised-unregistered",
      },
      {
        status:404,
      }
    )
  }
}

export const config = {
  matcher: ["/api/admin/:path*"],
};
