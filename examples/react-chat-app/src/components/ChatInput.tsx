import { useSelector } from "react-redux";
import { RootState } from "../lib/store/storeLandbotConfig";

interface ChatInputProps {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    submit: () => void;
  }
  
  const ChatInput = ({ input, setInput, submit }: ChatInputProps) => {

    const { config } = useSelector((state: RootState) => state.config);

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
  