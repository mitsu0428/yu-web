import React from "react";
import styled from "styled-components";

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
    <>
      <ProgressBarContainer>
        <ProgressBar progress={progress}>
          <ProgressText>{`${progress}%`}</ProgressText>
        </ProgressBar>
      </ProgressBarContainer>
    </>
  );
};

export default Loading;

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 5px;
  background-color: #ccc;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: #932e40;
  box-shadow: 0 0 7px #932e40, 0 0 10px #932e40, 0 0 21px #932e40,
  transition: width 0.1s linear;
  position: relative;
`;

const ProgressText = styled.div`
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 7px #932e40, 0 0 10px #932e40, 0 0 21px #932e40,
    0 0 42px #0fa;
`;
