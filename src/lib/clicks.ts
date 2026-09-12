import { getMongoClientPromise } from "@/lib/mongodb";

export async function getClickCounts(): Promise<Record<string, number>> {
  const client = await getMongoClientPromise();
  const db = client.db("linknamu");

  const docs = await db
    .collection<{ linkId: string; count: number }>("linkClicks")
    .find({})
    .toArray();

  return Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));
}
