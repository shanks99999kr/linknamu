import type { LinkItem, Profile } from "@/types/link";

export const profile: Profile = {
  name: "김링크",
  bio: "개발하고 기록하는 사람 🌱",
  imageUrl:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23d6d3d1'/%3E%3Ctext x='50' y='58' font-size='36' text-anchor='middle' fill='%2378716c' font-family='sans-serif'%3E김%3C/text%3E%3C/svg%3E",
};

export const links: LinkItem[] = [
  { id: "1", title: "GitHub", url: "https://github.com/username" },
  { id: "2", title: "LinkedIn", url: "https://linkedin.com/in/username" },
  { id: "3", title: "Blog", url: "https://example.com/blog" },
];
