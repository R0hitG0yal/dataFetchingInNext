import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export function GET() {
  return Response.json({
    email: "rgoyal4122@gmail.com",
    name: "Rohit",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return Response.json({
    message: "you are logged in.",
  });
}
