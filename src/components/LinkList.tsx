"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/types/link";
import LinkCard from "@/components/LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    // 페이지 로드 시 전체 링크의 클릭 수를 한 번에 받아온다.
    fetch("/api/links/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    // 서버 응답을 기다리지 않고 화면의 숫자를 먼저 올린다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/links/${id}/click`, { method: "POST" }).catch(() => {});
  };

  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            {...link}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
