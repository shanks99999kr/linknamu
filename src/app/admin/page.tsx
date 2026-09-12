import type { Metadata } from "next";
import { links } from "@/data/links";
import { getClickCounts } from "@/lib/clicks";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "클릭 통계 - 링크나무",
};

export default async function AdminPage() {
  let counts: Record<string, number> = {};
  let error: string | null = null;

  try {
    counts = await getClickCounts();
  } catch {
    error = "클릭 데이터를 불러오지 못했습니다. MONGODB_URI 설정을 확인해주세요.";
  }

  const rows = links
    .map((link) => ({ ...link, count: counts[link.id] ?? 0 }))
    .sort((a, b) => b.count - a.count);

  return (
    <main className="flex min-h-screen justify-center bg-stone-100 px-4 py-10 sm:py-16">
      <div className="w-full max-w-lg rounded-3xl bg-white px-6 py-8 shadow-sm">
        <h1 className="text-lg font-semibold text-stone-900">클릭 통계</h1>
        <p className="mt-1 text-sm text-stone-500">
          링크별 클릭 수를 확인할 수 있어요.
        </p>

        {error ? (
          <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        ) : (
          <ul className="mt-6 flex flex-col gap-2">
            {rows.map((link) => (
              <li
                key={link.id}
                className="flex items-center justify-between rounded-xl border border-stone-200 px-4 py-3"
              >
                <span className="text-sm font-medium text-stone-800">
                  {link.title}
                </span>
                <span className="text-sm font-semibold text-stone-500">
                  {link.count}회
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
