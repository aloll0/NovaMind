import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  try {
    await connect();

    const query = username ? { username } : {};
    const posts = await Post.find(query);

    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
