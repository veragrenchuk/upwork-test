import Typography from "components/common/Typography";
import styled from "styled-components";

const Wrapper = styled.div`
  user-select: none;

  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  border: 1px solid #c4c4c4;

  margin-top: 2rem;

  padding-right: 2rem;
`;

const Title = styled(Typography)`
    color: #666;
`;

const S = {
  Wrapper,
  Title,
};

export default S;
