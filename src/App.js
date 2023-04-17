import React, { useState } from "react";
import styled from "styled-components";
import FlipCard from "./FlipCard/FlipCard";
import { lightTheme } from "./assets/theme";
import './App.css';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  margin: 0;
  align-items: center;

  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  const [flip, setFlip] = useState(false);
  
  return (
    <Wrapper theme={theme}>
      <FlipCard
        flip={flip}
        setFlip={setFlip}
        theme={theme}
        setChecked={setChecked}
        setTheme={setTheme}
        checked={checked}
      />
    </Wrapper>
  );
}

export default App;
