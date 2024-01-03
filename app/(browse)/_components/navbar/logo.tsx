import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <Image
          src="/twitch.svg"
          alt="Twitch"
          height="32"
          width="32"
          className="mr-12 shrink-0 lg:mr-0 lg:shrink"
        />
        <p className="hidden lg:block text-lg font-semibold">Twitch</p>
      </div>
    </Link>
  );
};
