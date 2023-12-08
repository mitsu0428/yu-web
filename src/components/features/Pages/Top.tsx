import React from "react";
import styled from "styled-components";
import TopSection from "../Section/YuWebTopSection";
import YuWebWorksArea from "../Section/YuWebWorksArea";
import YuWebNewsArea from "../Section/YuWebNewsArea";
import YuWebApproachsAreaFirst from "../Section/YuWebApproachAreaFirst";
import YuWebApproachsAreaSecond from "../Section/YuWebApproachAreaSecond";
import YuWebApproachsAreaThird from "../Section/YuWebApproachAreaThird";
import YuWebAboutsArea from "../Section/YuWebAboutArea";

function Top() {
  return (
    <Main>
      <TopSection />
      <YuWebAboutsArea />
      <YuWebWorksArea />
      <YuWebNewsArea />
      <YuWebApproachsAreaFirst />
      <YuWebApproachsAreaSecond />
      <YuWebApproachsAreaThird />
    </Main>
  );
}

export default Top;

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
`;
