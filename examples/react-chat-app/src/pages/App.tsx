import { useState, useCallback } from "react";
import { ChatMessage } from '../lib/types/types';
import ChatHeader from '../components/ChatHeader';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';
import { useChatConfig } from '../lib/hooks/useChatConfig';
import { useLandbotCore } from '../lib/hooks/useLandbotCore';
import { useScrollToBottom } from '../lib/hooks/useScrollToBottom';

export const App = () => {
  const [messages, setMessages] = useState<Record<string, ChatMessage>>({});
  const [input, setInput] = useState("");
  const { config, loading, error  } = useChatConfig();
  const core = useLandbotCore(config, setMessages);
  useScrollToBottom(messages);

  const submit = useCallback(() => {
    if (input !== "" && core.current) {
      core.current.sendMessage({ message: input });
      setInput("");
    }
  }, [input, core]);

  return (
    <section id="landbot-app">
      <div className="chat-container">
        <div className="landbot-chat">
          <ChatHeader loading={loading}/>
          <MessageList messages={messages} />
          <ChatInput input={input} setInput={setInput} submit={submit} />
        </div>
      </div>
    </section>
  );
};
