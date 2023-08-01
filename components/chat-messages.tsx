"use client";

import { Companion } from "@prisma/client";

import { ChatMessage } from "@/components/chat-message";

interface ChatMessagesProps {
  messages: any[];
  isLoading: boolean;
  companion: Companion;
}

export const ChatMessages = ({
  companion,
  isLoading,
  messages = [],
}: ChatMessagesProps) => {
  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        role="system"
        src={companion.src}
        content={`Hello, I am ${companion.name}, ${companion.description}`}
      />
      <ChatMessage
        role="user"
        content={`Hello, I am ${companion.name}, ${companion.description}`}
      />
    </div>
  );
};
