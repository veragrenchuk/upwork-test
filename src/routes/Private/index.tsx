import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { setUser } from "store/slices/user";
import { User } from "store/types/userState";

interface Props {
  children: React.ReactNode;
}

const Private: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userStorage = localStorage.getItem("user");
  const user: User | null = userStorage ? JSON.parse(userStorage) : null;

  useEffect(() => {
    if (!user?.isAuth) return navigate("/login");
    dispatch(setUser(user));
  }, [user, navigate, dispatch]);

  return <>{children}</>;
};

export default Private;
