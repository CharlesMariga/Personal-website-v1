import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateInterface {
  theme: {
    mode: string;
  };
}

export const themeSlice = createSlice({
  name: "theme",
  initialState: {},
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = themeSlice.actions;

export const selectMode = (state: StateInterface) => state.theme.mode;

export default themeSlice.reducer;
