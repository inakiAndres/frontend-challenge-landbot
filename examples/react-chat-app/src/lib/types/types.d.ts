export interface ChatMessage {
    key: string;
    text?: string;
    author: "bot" | "user";
    timestamp: number;
    type: string;
    buttons?: Array;
    payloads?: Array;
  }
  
export interface ChatConfig {
    [key: string]: any;
  }

export interface MessageListProps {
    messages: Record<string, ChatMessage>;
    revisitMessages: Record<string, ChatMessage>;
}
