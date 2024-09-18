import connectMongoDB from "../../../lib/mongodb";
import Snippet from "../../../models/snippets";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, code, tags } = await request.json();
  await connectMongoDB();
  await Snippet.create({ title, description, code, tags });
  return NextResponse.json(
    { message: "Snippet created successfully" },
    { success: 200 }
  );
}

export async function GET() {
  try {
    await connectMongoDB();
    const snippets = await Snippet.find();
    if (!snippets) {
      return NextResponse.json(
        { message: "No snippets found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ snippets }, { success: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
