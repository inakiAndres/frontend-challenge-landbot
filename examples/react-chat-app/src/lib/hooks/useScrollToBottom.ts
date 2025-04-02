import { useEffect } from "react";
import { ChatMessage } from '../types/types';

export const useScrollToBottom = (messages: Record<string, ChatMessage>) => {
  useEffect(() => {
    const container = document.getElementById("landbot-messages-container");
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
};
