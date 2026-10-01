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
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-[18px] text-center text-[15px] font-medium text-stone-700 shadow-[0_4px_20px_-6px_rgba(160,90,50,0.15)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_8px_24px_-8px_rgba(160,90,50,0.22)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70"
    >
      {title}
    </a>
  );
}
