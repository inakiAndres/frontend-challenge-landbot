import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store/store";
import { useLandbotCore } from '../lib/hooks/useLandbotCore';

  const ChatInput = () => {
    const core = useLandbotCore();

    const { config } = useSelector((state: RootState) => state.config);

    const [input, setInput] = useState("");

    const submit = useCallback(() => {
        if (input !== "" && core.current) {
          core.current.sendMessage({ message: input });
          setInput("");
        }
      }, [input, core]);

    return (
      <div className="landbot-input-container">
        <div className="field">
          <div className="control">
            <input
              className="landbot-input"
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submit();
                }
              }}
              placeholder={config?.text?.text_input_placeholder || "Type here..."}
              type="text"
              value={input}
            />
            <button
              className="button landbot-input-send"
              disabled={input === ""}
              onClick={submit}
              type="button"
            >
              <span className="icon is-large" style={{ fontSize: 25 }}>
                ➤
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ChatInput;
  