import { NextResponse } from "next/server";
import connectToDatabase from "@/configs/db";
import Product from "@/models/product.model";

//to fetch data.
export async function GET(request, { params }) {
  const resolvedParams = await params;
  const { email } = resolvedParams;

  await connectToDatabase();
  const products = await Product.find({ email });
  // if (!products) {
  //   return NextResponse.json(
  //     {
  //       message: "no product found",
  //       useremail: email,
  //       data: products,
  //     },
  //     {
  //       status: 404,
  //     }
  //   );

  return NextResponse.json(
    {
      message: "success",
      useremail: email,
      data: products,
    },
    {
      status: 200,
    }
  );

  // console.log(email);
}