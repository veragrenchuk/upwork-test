import Typography from "components/common/Typography";
import styled from "styled-components";

const LoginWrapper = styled.div`
  padding: 1rem;

  border: 1px solid #979797 ;
  box-shadow: 3px 2px 5px #979797 ;
  border-radius: 10px;

  margin: 0 auto;

  max-width: 600px;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled(Typography)`
  font-size: 1.5rem;
`;

const Content = styled.div`
  max-width: 400px;
  width: 100%;

  margin: 0 20px;
`;

const Actions = styled.div`
  margin-top: 80px;

  padding-bottom: 50px;

  width: 100%;
`;

const S = {
  LoginWrapper,
  Title,
  Content,
  Actions
};

export default S;
