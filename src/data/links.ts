import type { LinkItem, Profile } from "@/types/link";

export const profile: Profile = {
  name: "카즈하",
  bio: "르세라핌",
  imageUrl: "http://placehold.co/150x150/orange/white",
};

export const links: LinkItem[] = [
  { id: "1", title: "GitHub", url: "https://github.com/username" },
  { id: "2", title: "LinkedIn", url: "https://linkedin.com/in/username" },
  { id: "3", title: "Blog", url: "https://example.com/blog" },
];
