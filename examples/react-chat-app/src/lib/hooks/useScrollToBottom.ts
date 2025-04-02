import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useScrollToBottom = () => {
    const messages = useSelector((state: RootState) => state.messages.messages);

    useEffect(() => {
        const container = document.getElementById("landbot-messages-container");
        if (container) {
            container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth",
            });
        }
    }, [messages]);
};
