import { NextResponse } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
const pump = promisify(pipeline);

export default async function POST(req: any) {
  try {
    const formData = await req.formData();
    const file = formData.get("files")[0];
    const filePath = `./public/uploads/${file.name}`;
    await pump(file.stream(), fs.createWriteStream(filePath));
    return NextResponse.json({ status: "success", message: "File uploaded" });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error });
  }
}
