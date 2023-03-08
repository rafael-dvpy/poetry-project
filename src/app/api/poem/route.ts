import { NextResponse } from "next/server";
import comment from "../../../data/comment.json";

export async function GET(request: Request) {
  return NextResponse.json(comment);
}
