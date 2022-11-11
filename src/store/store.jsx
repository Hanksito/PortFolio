import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./temaSlice";
export default configureStore({
  reducer: {
    tema: counterSlice,
  },
});
