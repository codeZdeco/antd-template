import { createSlice } from "@reduxjs/toolkit";
import { SizeType } from "antd/es/config-provider/SizeContext";

export interface ThemeProps {
  selected: string;
  space?: { size?: number | SizeType };
  direction?: "ltr" | "rtl";
  componentSize?: SizeType;
}

const initialState: ThemeProps = {
  selected: "dark",
  space: {
    size: "middle",
  },
  direction: "ltr",
  componentSize: "middle",
};

const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    selectTheme: (state, { payload }) => {
      state.selected = payload;
    },
    selectSpace: (state, { payload }) => {
      state.space = payload;
    },
    selectDirection: (state, { payload }) => {
      state.direction = payload;
    },
    selectComponentSize: (state, { payload }) => {
      state.componentSize = payload;
    },
  },
});

export const {
  selectTheme,
  selectSpace,
  selectDirection,
  selectComponentSize,
} = ThemeSlice.actions;

export default ThemeSlice.reducer;
