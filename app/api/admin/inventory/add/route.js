export const runtime = "nodejs";

import { NextResponse } from "next/server";
import connectToDatabase from "@/configs/db";
import Product from "@/models/product.model";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const {
      email,
      name,
      description,
      images,
      category,
      brand,
      price,
      discountPrice,
      stock,
      rating,
      reviews,
      tags,
      variants,
      isFeatured,
    } = await request.json();
    await connectToDatabase();

    //create product
    const createdProduct = new Product({
      email,
      name,
      description,
      images,
      category,
      brand,
      price,
      discountPrice,
      stock,
      rating,
      reviews,
      tags,
      variants,
      isFeatured,
    });

    await createdProduct.save();

    return NextResponse.json(
      {
        message: "Product created successfully",
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
      {status:500}
    );
  }
}

// export async function GET(request) {
//   // Access the cookie from the request
//   const token = request.cookies.get("authToken");

//   // Check if token exists
//   if (!token) {
//     return NextResponse.json({ error: "No token found" }, { status: 401 });
//   }

//   // Access the actual string value
//   const tokenValue = token.value;

//   console.log("Token:", tokenValue);

//   return NextResponse.json({ message: "Token received", token: tokenValue});
// }
