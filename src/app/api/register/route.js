import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export const POST = async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const reqBody = await req.json();

    const res = await prisma.user.create({
      data: {
        name: reqBody.name,
        email: reqBody.email,
        password: reqBody.password,
        google_id: reqBody.password,
        avatar: reqBody.avatar,
        access_token: reqBody.access_token,
        role: "user",
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        status: 201,
      },
      { status: 201 }
    );
  } catch (e) {
    console.log(e.message);
  }
};
