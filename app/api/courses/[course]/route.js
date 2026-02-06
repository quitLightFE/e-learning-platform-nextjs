import coursesData from "@/app/data/courses";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { course } = await params;
  console.log(course);

  const finded = coursesData.find((item) => item.slug === course);
  return NextResponse.json(finded);
}
