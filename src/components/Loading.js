import styled, { keyframes } from "styled-components";
import { mainColors } from "../style/GlobalStyled";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingAni = keyframes`
    100%{
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 10px solid ${mainColors.pointColor};
  border-color: ${mainColors.pointColor} transparent transparent transparent;
  animation: ${LoadingAni} 1s infinite;
`;

export const Loading = () => {
  return (
    <Wrap>
      <Spinner></Spinner>
    </Wrap>
  );
};
