interface ChatInputProps {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    submit: () => void;
  }
  
  const ChatInput = ({ input, setInput, submit }: ChatInputProps) => {
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
              placeholder="Type here..."
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
  