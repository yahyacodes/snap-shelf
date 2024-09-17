import connectMongoDB from "@/lib/mongodb";
import Snippet from "@/models/snippets";
import { NextResponse } from "next/server";

// create a function to update the snippets by id
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newCode: code,
    newTags: tags,
  } = await request.json();
  await connectMongoDB();
  await Snippet.findByIdAndUpdate(id, { title, description, code, tags });
  return NextResponse.json(
    { message: "Snippet updated successfully" },
    { success: 200 }
  );
}

// create a function to get the snippet by id
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const snippet = await Snippet.findById({ _id: id });
  return NextResponse.json({ snippet }, { success: 200 });
}
