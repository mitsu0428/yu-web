import Image from "next/image";
import React from "react";
import styled from "styled-components";

function YuWebWorksArea() {
  // 画像のパスを格納する配列
  const images01 = [
    "/TopImage/TopImage.jpg",
    "/TopImage/TopImage.jpg",
    "/TopImage/TopImage.jpg",
    "/TopImage/TopImage.jpg",
  ];
  const images02 = [
    "/TopImage/TopImage.jpg",
    "/TopImage/TopImage.jpg",
    "/TopImage/TopImage.jpg",
    "/TopImage/TopImage.jpg",
  ];
  const images03 = [
    "/Logo/logo-tate.png",
    "/Logo/logo-tate.png",
    "/Logo/logo-tate.png",
    "/Logo/logo-tate.png",
  ];

  const [randomImages, setRandomImages] = React.useState<string[]>([]);
  const [randomImages02, setRandomImages02] = React.useState<string[]>([]);

  React.useEffect(() => {
    shuffleImages();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 画像の配列をランダムにシャッフルする関数
  const shuffleImages = () => {
    const shuffled01 = images01.sort(() => 0.5 - Math.random()).slice(0, 4);
    const shuffled02 = images02.sort(() => 0.5 - Math.random()).slice(0, 4);

    setRandomImages(shuffled01);
    setRandomImages02(shuffled02);
  };

  return (
    <Wrapper>
      <RelativeArea>
        <Image
          src="/VerticalText/works.png"
          alt="TopImage"
          width={125}
          height={500}
        />
      </RelativeArea>
      <RelativeArea>
        {randomImages.map((image, index) => (
          <RandomImage
            key={index}
            src={image}
          />
        ))}
        {randomImages02.map((image, index) => (
          <RandomImage02
            key={index}
            src={image}
          />
        ))}
      </RelativeArea>
    </Wrapper>
  );
}

export default YuWebWorksArea;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const RelativeArea = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;

const RandomImage = styled.img`
  position: absolute;
  top: ${Math.random() * 30}%;
  right: ${Math.random() * 30}%;
  max-width: 25%;
  padding: 16px;
`;

const RandomImage02 = styled.img`
  position: absolute;
  left: ${Math.random() * 30}%;
  bottom: ${Math.random() * 30}%;
  max-width: 40%;
  padding: 16px;
`;
