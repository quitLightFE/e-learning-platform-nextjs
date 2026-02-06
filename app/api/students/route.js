import students from "@/app/data/students";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(students);
}
