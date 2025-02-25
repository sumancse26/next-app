import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  return NextResponse.json({ message: "This is a product page" });
};
