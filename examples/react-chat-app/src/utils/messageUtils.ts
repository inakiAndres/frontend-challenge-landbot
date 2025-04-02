import { Message } from "@landbot/core/dist/src/types";

export function parseMessage(data: Message) {

  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? "bot" : "user",
    timestamp: data.timestamp,
    type: data.type
  };
}

export function parseMessages(messages: Record<string, Message>) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = parseMessage(next);
    return obj;
  }, {} as Record<string, any>);
}
