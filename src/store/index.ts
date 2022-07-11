import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";
import errors from "./slices/errors";

const store = configureStore({
  reducer: {
    user,
    errors
  },
});

export default store

export type RootState = ReturnType<typeof store.getState>