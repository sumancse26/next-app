import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  return NextResponse.json({ message: "This is a product page" });
};

export const POST = async (req, res) => {
  const prisma = new PrismaClient();
  try {
    const reqBody = await req.json();
    const res = await prisma.user.create({
      data: { ...reqBody, created_at: new Date(), updated_at: new Date() },
    });
    return NextResponse.json({
      message: "User created successfully",
      data: res,
    });
  } catch (e) {
    console.log(e.message);
  }
};
