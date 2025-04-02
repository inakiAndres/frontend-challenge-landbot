import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./sliceLandbotConfig";
import messagesReducer from './sliceMessages';

const store = configureStore({
  reducer: {
    config: configReducer,
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
