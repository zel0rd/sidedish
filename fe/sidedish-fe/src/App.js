import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header.jsx";
import { SmallCard } from "./components/MenuCard/SmallCard";
import { MiddleCard } from "./components/MenuCard/MiddleCard";
import { LargeCard } from "./components/MenuCard/LargeCard";
import { BestMenu } from "./components/BestMenu/BestMenu.jsx";
import { FlexRowContainer } from "./components/common/FlexContainer.jsx";
import MenuSliderContainer from "./components/MenuSliderContainer/MenuSliderContainer.js";

const SeeMoreBtn = styled.button`
  width: 1600px;
  height: 90px;
  position: relative;
  padding: 0;
  background-color: #f5f5f7;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.05);
  border: 1px lightgray solid;
  border-top: none;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  color: #333333;

  &:hover {
    background-color: #dddddd;
  }
`;

function App() {
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {}, [seeAll]);

  const handleClickSeeMoreBtn = () => {
    setSeeAll(true);
  };

  return (
    <>
      <div className="App">
        <Header></Header>
        <BestMenu></BestMenu>
        <MenuSliderContainer seeAll={seeAll} />
      </div>
      {seeAll || (
        <SeeMoreBtn onClick={handleClickSeeMoreBtn}>모두 펼쳐보기</SeeMoreBtn>
      )}
    </>
  );
}

export default App;
