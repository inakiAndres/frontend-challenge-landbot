import { Message } from "@landbot/core/dist/src/types";
import { ChatMessage } from "../lib/types/types"

export function parseMessage(data: Message) : ChatMessage {

  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? "bot" : "user",
    timestamp: data.timestamp,
    type: data.type,
    buttons: data.buttons,
    payloads: data.payloads
  };
}

export function parseMessages(messages: Record<string, Message>) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = parseMessage(next);
    return obj;
  }, {} as Record<string, any>);
}
