import { ChatMessage } from '../lib/types/types';
import MessageItem from './MessageItem';

interface MessageListProps {
  messages: Record<string, ChatMessage>;
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="landbot-messages-container" id="landbot-messages-container">
      {Object.values(messages)
        .filter(message => ["text", "dialog"].includes(message.type))
        .sort((a, b) => a.timestamp - b.timestamp)
        .map((message) => (
          <MessageItem key={message.key} message={message} />
        ))}
    </div>
  );
};

export default MessageList;
