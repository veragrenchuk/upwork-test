import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorsState, ErrorState, ErrorStateKeys } from "store/types/errorsState";

const initialState: ErrorsState = {
  login: {
    message: "",
    isError: false,
  },
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setLoginError: (state: ErrorsState, action: PayloadAction<ErrorState>) => {
      state.login = action.payload;
    },
    resetError: (state: ErrorsState, action: PayloadAction<ErrorStateKeys>) => {
      state[action.payload] = {
        message: "",
        isError: false,
      };
    },
  },
});

export const { setLoginError, resetError } = errorsSlice.actions;

export default errorsSlice.reducer;
