"use client";

import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners";

import { cn } from "@/lib/utils";
import { BotAvatar } from "./bot-avatar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { UserAvatar } from "@/components/user-avatar";
import { Copy } from "lucide-react";

export interface ChatMessageProps {
  src?: string;
  content?: string;
  isLoading?: boolean;
  role: "system" | "user";
}

export const ChatMessage = ({
  src,
  role,
  content,
  isLoading,
}: ChatMessageProps) => {
  const { toast } = useToast();
  const { theme } = useTheme();

  const onCopy = () => {
    if (!content) return;

    navigator.clipboard.writeText(content);
    toast({
      description: "Message copied to clipboard",
    });
  };

  return (
    <div
      className={cn(
        "group flex items-start gap-x-3 py-4 w-full",
        role === "user" && "justify-end"
      )}
    >
      {role !== "user" && src && <BotAvatar src={src} />}
      <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
        {isLoading ? (
          <BeatLoader
            size={5}
            color={theme === "light" ? "black" : "white"}
          />
        ) : (
          content
        )}
      </div>
      {role === "user" && <UserAvatar />}
      {role !== "user" && !isLoading && (
        <Button
          size={"icon"}
          onClick={onCopy}
          variant={"ghost"}
          className="opacity-0 group-hover:opacity-100 transition"
        >
          <Copy className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};
