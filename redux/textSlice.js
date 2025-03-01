import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: {
    textValue: "", // Stores the text input value
    isVisible: true, // Controls the visibility of ComponentOne
  },
  reducers: {
    setText: (state, action) => {
      state.textValue = action.payload; // Updates the text
    },
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible; // Toggles component visibility
    },
  },
});

export const { setText, toggleVisibility } = textSlice.actions;
export default textSlice.reducer;
