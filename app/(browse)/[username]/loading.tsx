import { StreamPlayerSkeleton } from "@/components/stream-player";

const UserLoading = async () => {
  return (
    <div className="h-full">
      <StreamPlayerSkeleton />
    </div>
  );
};

export default UserLoading;
