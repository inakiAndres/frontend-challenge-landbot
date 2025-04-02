import ChatHeader from '../components/ChatHeader';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';
import { useChatConfig } from '../lib/hooks/useChatConfig';
import { useScrollToBottom } from '../lib/hooks/useScrollToBottom';
import { useStyle } from '../lib/hooks/useStyle';

export const App = () => {  
  const { loading } = useChatConfig();

  useStyle();
  useScrollToBottom();

  return (
    <section id="landbot-app">
      <div className="chat-container">
        <div className="landbot-chat">
          <ChatHeader loading={loading}/>
          <MessageList />
          <ChatInput />
        </div>
      </div>
    </section>
  );
};
