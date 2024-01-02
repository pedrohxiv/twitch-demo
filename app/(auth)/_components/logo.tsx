import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Image src="/twitch.svg" alt="Gamehub" height="80" width="80" />
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">Twitch</p>
        <p className="text-sm text-muted-foreground">
          Where thousands of communities come together for whatever, every day.
        </p>
      </div>
    </div>
  );
};
