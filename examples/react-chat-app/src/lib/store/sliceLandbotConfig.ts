import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfigProperties } from "@landbot/core/dist/src/types";

interface ConfigState {
  config: ConfigProperties | null;
  loading: boolean;
  error: string | null;
}

const initialState: ConfigState = {
  config: null,
  loading: false,
  error: null,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setConfigLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setConfigSuccess: (state, action: PayloadAction<any>) => {
      state.config = action.payload;
      state.loading = false;
    },
    setConfigError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setConfigLoading, setConfigSuccess, setConfigError } = configSlice.actions;

export default configSlice.reducer;
