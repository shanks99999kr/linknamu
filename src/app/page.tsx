import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile, links } from "@/data/links";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh justify-center overflow-hidden px-6 pt-20 pb-16 sm:px-8 sm:pt-28">
      {/* 글래스 카드 뒤로 은은하게 비치는 배경 빛 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl"
      />

      <div className="relative flex w-full max-w-md flex-col items-center gap-12">
        <ProfileHeader {...profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
