import { useState, useEffect } from "react";
import { ConfigProperties } from "@landbot/core/dist/src/types";

let cachedConfig: ConfigProperties | null = null;

export const useChatConfig = (): { config:  ConfigProperties | null; loading: boolean; error: string | null } => {
  const [config, setConfig] = useState<ConfigProperties | null>(cachedConfig);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (config) return;

    const fetchData = async () => {
      try {
        const response = await fetch("https://chats.landbot.io/u/H-441480-B0Q96FP58V53BJ2J/index.json");
        const data = await response.json();
        setConfig(data);
        cachedConfig = data;
        setLoading(false);
      } catch (err) {
        setError('Failed to load config.');
        setLoading(false);
      }
    };

    fetchData();
 
  }, [config]);

  return { config, loading, error };
};

