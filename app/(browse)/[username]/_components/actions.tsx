"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { onBlock } from "@/actions/block";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";

interface ActionsProps {
  userId: string;
  isFollowing: boolean;
}

export const Actions = ({ userId, isFollowing }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => {
          toast.success(`You are now following ${data.following.username}`);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Something went wrong");
        });
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => {
          toast.success(`You have unfollowed ${data.following.username}`);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Something went wrong");
        });
    });
  };

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => {
          toast.success(`Blocked the user ${data.blocked.username}`);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Something went wrong");
        });
    });
  };

  return (
    <>
      <Button
        disabled={isPending}
        onClick={isFollowing ? () => handleUnfollow() : () => handleFollow()}
        variant="primary"
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button onClick={handleBlock} disabled={isPending}>
        Block
      </Button>
    </>
  );
};
