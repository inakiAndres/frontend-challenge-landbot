import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConfigLoading, setConfigSuccess, setConfigError } from "../store/sliceLandbotConfig";
import { RootState } from "../store/store";

export const useChatConfig = () => {
  const landbotUrl: string = import.meta.env.VITE_LANDBOT_URL;

  const dispatch = useDispatch();
  const { config, loading, error } = useSelector((state: RootState) => state.config);

  useEffect(() => {
    if (config) return;

    const fetchData = async () => {
      dispatch(setConfigLoading());
      try {
        const response = await fetch(landbotUrl);
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
