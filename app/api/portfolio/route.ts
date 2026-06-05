import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const items = await db.portfolio.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch portfolio" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const item = await db.portfolio.create({
      data: {
        title: data.title,
        slug: data.slug,
        clientName: data.clientName,
        storyContent: data.storyContent,
        coverImage: data.coverImage,
        videoUrl: data.videoUrl,
        externalLink: data.externalLink,
        published: data.published ?? false,
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create portfolio item" }, { status: 500 });
  }
}
