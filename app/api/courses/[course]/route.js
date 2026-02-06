import coursesData from "@/app/data/courses";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { course } = await params;
  console.log(course);

  const found = coursesData.find((item) => item.slug === course);
  if (!found) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }
  return NextResponse.json(found);
}
