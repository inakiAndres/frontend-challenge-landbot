import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConfigLoading, setConfigSuccess, setConfigError } from "../store/sliceLandbotConfig";
import { RootState } from "../../lib/store/storeLandbotConfig";

export const useChatConfig = () => {
  const dispatch = useDispatch();
  const { config, loading, error } = useSelector((state: RootState) => state.config);

  useEffect(() => {
    if (config) return;

    const fetchData = async () => {
      dispatch(setConfigLoading());
      try {
        const response = await fetch("https://chats.landbot.io/u/H-441480-B0Q96FP58V53BJ2J/index.json");
        const data = await response.json();
        dispatch(setConfigSuccess(data));
      } catch (err) {
        dispatch(setConfigError("Failed to load config."));
      }
    };

    fetchData();
  }, [dispatch, config]);

  return { config, loading, error };
};
