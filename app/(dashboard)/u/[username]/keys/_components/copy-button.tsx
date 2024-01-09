"use client";

import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  value?: string;
}

export const CopyButton = ({ value }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = () => {
    if (!value) {
      return;
    }

    setIsCopied(true);

    navigator.clipboard.writeText(value);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const Icon = isCopied ? CheckCheck : Copy;

  return (
    <Button
      onClick={onCopy}
      disabled={!value || isCopied}
      variant="ghost"
      size="sm"
    >
      <Icon className="w-4 h-4" />
    </Button>
  );
};
