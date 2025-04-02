import { useState, useEffect } from "react";

interface ChatHeaderProps {
  loading: boolean;
}

const ChatHeader = ({ loading }: ChatHeaderProps) => {
  const [localTitle, setLocalTitle] = useState("Loading...");

  useEffect(() => {
    setLocalTitle(loading ? "Loading..." : "Landbot core example");
  }, [loading]);

  return (
    <div className="landbot-header">
      <h1 className="subtitle">{localTitle}</h1>
    </div>
  );
};

export default ChatHeader;
