import styled from "styled-components";

import Button from "src/components/Button";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WelcomeMsg = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const DescriptionMsg = styled.p`
  margin: 8px 0 24px;
`;

export const MovingButtonWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MovingIndexButton = styled(Button)`
  margin-top: 24px;
`;
