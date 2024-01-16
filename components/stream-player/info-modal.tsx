"use client";

import { Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import { toast } from "sonner";

import { updateStream } from "@/actions/stream";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadDropzone } from "@/lib/uploadthing";

interface InfoModalProps {
  initialName: string;
  initialThumbnailUrl: string | null;
}

export const InfoModal = ({
  initialName,
  initialThumbnailUrl,
}: InfoModalProps) => {
  const [name, setName] = useState<string>(initialName);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(
    initialThumbnailUrl
  );
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const closeRef = useRef<React.ElementRef<"button">>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateStream({ name: name })
        .then(() => {
          toast.success("Stream updated");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Something went wrong");
        });
    });

    closeRef.current?.click();
  };

  const onRemove = () => {
    startTransition(() => {
      updateStream({ thumbnailUrl: null })
        .then(() => {
          toast.success("Stream updated");
          setThumbnailUrl("");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Something went wrong");
        });
    });

    closeRef.current?.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="ml-auto">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit stream info</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-14">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input
              placeholder="Stream name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <Label>Thumbnail</Label>
            {thumbnailUrl ? (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <div className="absolute top-2 right-2 z-10">
                  <Hint label="Remove thumbnail" asChild side="left">
                    <Button
                      type="button"
                      disabled={isPending}
                      onClick={onRemove}
                      className="h-auto w-auto p-1.5"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </Hint>
                </div>
                <Image
                  src={thumbnailUrl}
                  alt="Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="rounded-xl border outline-dashed outline-muted">
                <UploadDropzone
                  endpoint="thumbnailUploader"
                  appearance={{
                    label: { color: "#FFFFFF" },
                    allowedContent: { color: "#FFFFFF" },
                  }}
                  onClientUploadComplete={(res) => {
                    setThumbnailUrl(res?.[0]?.url);
                    router.refresh();
                    closeRef?.current?.click();
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <DialogClose asChild ref={closeRef}>
              <Button type="button" variant="ghost" disabled={isPending}>
                Cancel
              </Button>
            </DialogClose>
            <Button variant="primary" type="submit" disabled={isPending}>
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
