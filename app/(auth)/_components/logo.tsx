import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Image src="/twitch.svg" alt="Gamehub" height="80" width="80" />
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold">Twitch</p>
        <p className="text-sm text-muted-foreground">
          Where thousands of communities come together for whatever, every day.
        </p>
      </div>
    </div>
  );
};
