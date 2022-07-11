import { isRejected } from "@reduxjs/toolkit";
import Button from "components/common/Button";
import Input from "components/common/Input";
import Typography from "components/common/Typography";
import React, { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { resetError } from "store/slices/errors";
import { fetchUser } from "store/slices/user";
import { UserLoginData } from "store/types/userState";
import S from "./styled";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isError, message } = useAppSelector((state) => state.errors.login);

  const [loginData, setLoginData] = useState<UserLoginData>({
    username: "",
    password: "",
  });

  const signInHandler = () => {
    dispatch(resetError("login"));
    dispatch(fetchUser(loginData)).then((e) => !isRejected(e) && navigate("/"));
  };

  const changeHalnder = (e: ChangeEvent<HTMLInputElement>) => {
    if (isError) dispatch(resetError("login"));

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <S.LoginWrapper>
      <S.Title>Sign in</S.Title>
      <S.Content>
        <Input
          styles={{ marginTop: "60px" }}
          name="username"
          placeholder="Username"
          onChange={(e) => changeHalnder(e)}
        />
        <Input
          styles={{ marginTop: "60px" }}
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => changeHalnder(e)}
        />
        {isError && <Typography color="#EF0000">{message}</Typography>}
      </S.Content>
      <S.Actions>
        <Button
          styles={{ width: "50%", margin: "0 auto", display: "block" }}
          onClick={signInHandler}
        >
          Sign in
        </Button>
      </S.Actions>
    </S.LoginWrapper>
  );
};

export default Login;
