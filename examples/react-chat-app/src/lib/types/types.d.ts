export interface ChatMessage {
    key: string;
    text?: string;
    author: "bot" | "user";
    timestamp: number;
    type: string;
  }
  
export interface ChatConfig {
    [key: string]: any;
  }

export interface MessageListProps {
    messages: Record<string, ChatMessage>;
}
