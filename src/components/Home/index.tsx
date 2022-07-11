import Chart from "components/Chart";
import Button from "components/common/Button";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { resetUser } from "store/slices/user";
import S from "./styled";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { username } = useAppSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(resetUser());
    navigate("/login");
  };

  return (
    <S.HomeWrapper>
      <S.Title>{username}</S.Title>
      <S.Content>
        <Chart />
      </S.Content>
      <S.Actions>
        <Button
          styles={{
            margin: "0 0 0 auto",
            minWidth: "400px",
            transform: "translateX(25%)",
          }}
          onClick={logoutHandler}
        >
          Sign out
        </Button>
      </S.Actions>
    </S.HomeWrapper>
  );
};

export default Home;
