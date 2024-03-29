"use server";

import type { Stream } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/service/auth-service";

export const updateStream = async (values: Partial<Stream>) => {
  try {
    const self = await getSelf();
    const selfSteam = await db.stream.findUnique({
      where: {
        userId: self.id,
      },
    });

    if (!selfSteam) {
      throw new Error("Stream not found");
    }

    const validData = {
      name: values.name,
      thumbnailUrl: values.thumbnailUrl,
      isChatEnabled: values.isChatEnabled,
      isChatFollowersOnly: values.isChatFollowersOnly,
      isChatDelayed: values.isChatDelayed,
    };

    const stream = await db.stream.update({
      where: {
        id: selfSteam.id,
      },
      data: {
        ...validData,
      },
    });

    revalidatePath(`/u/${self.username}/chat`);
    revalidatePath(`/u/${self.username}`);
    revalidatePath(`/${self.username}`);

    return stream;
  } catch (error) {
    throw new Error("Internal Error");
  }
};
