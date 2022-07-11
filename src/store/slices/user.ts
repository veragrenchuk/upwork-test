import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import user from "mockData/user.json";
import { User, UserLoginData } from "store/types/userState";
import { setLoginError } from "./errors";

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (data: UserLoginData, { dispatch, rejectWithValue }) => {
    if (!data.username || !data.password) {
      dispatch(
        setLoginError({
          message: "Please, fill out form",
          isError: true,
        })
      );
      return rejectWithValue("Please, fill out form");
    }
    if (user.username !== data.username || user.password !== data.password) {
      dispatch(
        setLoginError({
          message: "Wrong password or username, please try again",
          isError: true,
        })
      );
      return rejectWithValue("Wrong password or username, please try again");
    }

    return { username: user.username };
  }
);

const initialState: User = {
  username: "",
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state: User) => {
      state = { isAuth: false, username: "" };

      localStorage.removeItem("user");

      return state;
    },
    setUser: (state: User, action: PayloadAction<User>) => {
      state = {
        ...state,
        ...action.payload,
      };

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state: User, action) => {
      state = {
        ...action.payload,
        isAuth: true,
      };

      localStorage.setItem("user", JSON.stringify(state));

      return state;
    });
  },
});

export const { resetUser, setUser } = userSlice.actions;

export default userSlice.reducer;
