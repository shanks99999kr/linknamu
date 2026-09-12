import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile, links } from "@/data/links";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-stone-100 px-4 py-10 sm:py-16">
      <div className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl bg-white px-6 py-10 shadow-sm">
        <ProfileHeader {...profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
