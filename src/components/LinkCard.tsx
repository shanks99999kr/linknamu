"use client";

import type { LinkItem } from "@/types/link";

export default function LinkCard({ id, title, url }: LinkItem) {
  const handleClick = () => {
    fetch(`/api/links/${id}/click`, { method: "POST" }).catch(() => {});
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-xl border border-stone-200 bg-white px-5 py-4 text-center text-sm font-medium text-stone-800 shadow-sm transition hover:border-stone-300 hover:shadow-md active:scale-[0.99]"
    >
      {title}
    </a>
  );
}
