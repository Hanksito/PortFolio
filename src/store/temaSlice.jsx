import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const counterSlice = createSlice({
  name: "tema",
  initialState,
  reducers: {
    boleanStyle: (state) => {
      state.value = true;
    },
    boleanStyleF: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { boleanStyle, boleanStyleF } = counterSlice.actions;
export const selectbolean = (state) => state.tema.value;

export default counterSlice.reducer;
