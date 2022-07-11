import Typography from "components/common/Typography";
import React, { FC } from "react";
import S from "./styled";

const NotFound: FC = () => {
  return (
    <S.Container>
      <Typography
        styles={{ fontSize: "1.5rem", fontWeight: "bold" }}
        color="#4D4DB4"
      >
        Page not found!
      </Typography>
      <Typography styles={{ fontSize: "2rem", margin: 0 }} color="#EF0000">
        404
      </Typography>
    </S.Container>
  );
};

export default NotFound;
