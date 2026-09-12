import type { Profile } from "@/types/link";

export default function ProfileHeader({ name, bio, imageUrl }: Profile) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-24 w-24 overflow-hidden rounded-full bg-stone-200 sm:h-28 sm:w-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-stone-900">{name}</h1>
        <p className="mt-1 text-sm text-stone-500">{bio}</p>
      </div>
    </div>
  );
}
