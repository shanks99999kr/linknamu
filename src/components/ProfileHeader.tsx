import type { Profile } from "@/types/link";

export default function ProfileHeader({ name, bio, imageUrl }: Profile) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="h-28 w-28 overflow-hidden rounded-full bg-orange-100 shadow-[0_12px_32px_-8px_rgba(180,100,60,0.35)] ring-4 ring-white/80 sm:h-32 sm:w-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-stone-800">
          {name}
        </h1>
        <p className="text-[15px] text-stone-500">{bio}</p>
      </div>
    </div>
  );
}
