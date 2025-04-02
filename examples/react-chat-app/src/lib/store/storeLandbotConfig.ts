import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./sliceLandbotConfig";

const storeLandbotConfig = configureStore({
  reducer: {
    config: configReducer,
  },
});

export type RootState = ReturnType<typeof storeLandbotConfig.getState>;
export type AppDispatch = typeof storeLandbotConfig.dispatch;

export default storeLandbotConfig;
