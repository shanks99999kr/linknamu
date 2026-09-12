import { NextRequest, NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const client = await getMongoClientPromise();
    const db = client.db("linknamu");

    const result = await db
      .collection<{ linkId: string; count: number; updatedAt: Date }>(
        "linkClicks"
      )
      .findOneAndUpdate(
        { linkId: id },
        { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
        { upsert: true, returnDocument: "after" }
      );

    return NextResponse.json({ linkId: id, count: result?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return NextResponse.json(
      { error: "클릭 수를 기록하지 못했습니다." },
      { status: 500 }
    );
  }
}
