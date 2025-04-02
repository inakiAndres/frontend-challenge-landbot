import { ChatMessage } from '../lib/types/types';

interface MessageItemProps {
    message: ChatMessage;
  }
  
  const MessageItem = ({ message }: MessageItemProps) => {
    return (
      <article className="media landbot-message" data-author={message.author}>
        <figure className="media-left landbot-message-avatar">
          <p className="image is-64x64">
            <img alt="" className="is-rounded" src="http://i.pravatar.cc/100" />
          </p>
        </figure>
        <div className="media-content landbot-message-content">
          <div className="content">
            <p>{message.text}</p>
          </div>
        </div>
      </article>
    );
  };
  
  export default MessageItem;
  