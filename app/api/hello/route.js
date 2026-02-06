// export default function handler(req, res) {
//   res.status(200).json({ name: "John" });
// }
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ name: "John" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ received: body });
}
