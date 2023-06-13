import React from "react";
import styled, { keyframes } from "styled-components";
import font from "../../../styles/NextFont";

const Loading: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
          return prevProgress;
        } else {
          return prevProgress + 1;
        }
      });
    }, 29);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <LoadingWrapper>
      <LoadingContent>
        <LoadingSpinner>
          <LoaderCircle />
        </LoadingSpinner>
        <LoadingText className={font.roboto.className}>
          Loading... {progress}%
        </LoadingText>
      </LoadingContent>
    </LoadingWrapper>
  );
};

export default Loading;

const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderCircle = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid transparent;
  border-top-color: #efeffa;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  color: #999;
  font-size: 20px;
  font-family: "PT Sans Narrow", sans-serif;
  margin-top: 20px;
`;
