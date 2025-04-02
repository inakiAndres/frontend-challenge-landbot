import { useRef, useEffect } from "react";
import Core from "@landbot/core";
import { Message, ConfigProperties } from "@landbot/core/dist/src/types";
import { ChatMessage } from "../types/types";
import { parseMessage, parseMessages } from "../../utils/messageUtils";

export const useLandbotCore = (config: ConfigProperties | null, setMessages: Function) => {
  const core = useRef<Core | null>(null);

  useEffect(() => {
    if (config) {
      core.current = new Core(config);
      core.current.pipelines.$readableSequence.subscribe((data: Message) => {
        setMessages((messages: ChatMessage) => ({
          ...messages,
          [data.key]: parseMessage(data),
        }));
      });

      core.current.init().then((data) => {
        setMessages(parseMessages(data.messages));
      });
    }
  }, [config, setMessages]);

  return core;
};
