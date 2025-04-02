import MessageItem from './MessageItem';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/store/store';

const MessageList = () => {
    const messages = useSelector((state: RootState) => state.messages.messages);

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
