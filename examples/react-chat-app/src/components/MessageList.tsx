import { useCallback } from 'react';
import MessageItem from './MessageItem';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/store/store';
import { useUserStatus } from "../lib/hooks/useUserStatus";

const MessageList = () => {
    const revisitMessages = useSelector((state: RootState) => state.messages.revisitMessages);
    const messages = useSelector((state: RootState) => state.messages.messages);
    const {isNewUser, resetUserStatus} = useUserStatus();

    const messagesToShow = isNewUser ? messages : revisitMessages;

     const submit = useCallback((action: string) => {
            if (action === '#init') {
              resetUserStatus();
              window.location.reload();
            }
          }, []);

    return (
        <div className="landbot-messages-container" id="landbot-messages-container">
        {Object.values(messagesToShow)
            .filter(message => ["text", "dialog"].includes(message.type))
            .sort((a, b) => a.timestamp - b.timestamp)
            .map((message) => (
            <>
            <MessageItem key={message.key} message={message} />
            {message.buttons && message.buttons.length > 0 && (
                <div className="message-buttons">
                  {message.buttons.map((buttonInfo : string, i : number) => (
                    <button
                      key={buttonInfo}
                      className="button message-button"
                      onClick={() => submit(message.payloads[i])}
                      type="button"
                    >
                      {buttonInfo}
                    </button>
                  ))}
                </div>
              )}
              </>
            ))
        }
        </div>
    );
};

export default MessageList;
