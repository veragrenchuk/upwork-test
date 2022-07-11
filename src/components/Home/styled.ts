import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 800px;
  width: 100%;

  margin: 0 10px;
`;

const Title = styled.span`
  font-size: 1.5rem;
`;

const Content = styled.div`
  width: 100%;
`;

const Actions = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const S = {
  HomeWrapper,
  Title,
  Content,
  Actions,
};

export default S;
