import { useRef, useEffect } from "react";
import Core from "@landbot/core";
import { Message } from "@landbot/core/dist/src/types";
import { useDispatch, useSelector } from "react-redux";
import { setMessages, addMessage, setRevisitMessages } from "../store/sliceMessages";
import { parseMessage, parseMessages } from "../../utils/messageUtils";
import { RootState } from "../store/store";

export const useLandbotCore = () => {
  const core = useRef<Core | null>(null);
  const dispatch = useDispatch();
  const isInitialized = useRef(false);
  const { config } = useSelector((state: RootState) => state.config);


  useEffect(() => {
    if (config) {
      dispatch(setRevisitMessages(parseMessage(config?.revisit[0])));
      core.current = new Core(config);

      core.current.pipelines.$readableSequence.subscribe((data: Message) => {
        dispatch(addMessage(parseMessage(data)));
      });

      if (!isInitialized.current) {
        core.current.init().then((data) => {
          dispatch(setMessages(parseMessages(data.messages)));
          isInitialized.current = true;
        });
      }
    }
  }, [config, dispatch]);

  return core;
};
