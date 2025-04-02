import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useStyle = () => {

    const { config } = useSelector((state: RootState) => state.config);

    useEffect(() => {        
        const root = document.documentElement;
    
        root.style.setProperty("--light", config?.light);
        root.style.setProperty("--dark", config?.dark);
        root.style.setProperty("--font-family", config?.design?.font_family);
        root.style.setProperty("--bot-message-bg", config?.colors?.bot_message_background);
        root.style.setProperty("--bot-message-text", config?.colors?.bot_message_text);
        root.style.setProperty("--user-message-bg", config?.colors?.user_message_background);
        root.style.setProperty("--button-bg", config?.colors?.button_background);
        root.style.setProperty("--button-text", config?.colors?.button_text);
        root.style.setProperty("--bg-image", `url(${config?.design?.background_image})`);
        root.style.setProperty("--header-bg-color", config?.design?.header_background_color);
        root.style.setProperty("--header-text-color", config?.design?.header_text);

        root.style.setProperty("--input-bg-color", config?.design?.form_inputs_background_color);
        root.style.setProperty("--input-border-color", config?.design?.form_inputs_border_color);
        root.style.setProperty("--input-text-color", config?.design?.form_inputs_color);
          
    }, [config]);

};
