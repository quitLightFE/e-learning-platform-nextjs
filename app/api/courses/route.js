import courses from "@/app/data/courses";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(courses);
}
