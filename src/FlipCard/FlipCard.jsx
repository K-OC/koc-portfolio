import React from "react";
import styled from "styled-components";
import { FrontCard, BackCard } from "./FrontBack";
import "./flip.css";
const Root = styled.div`
  background-color: transparent;
  perspective: 1000px;
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
  .flip-card .flip-card-inner {
    transform: ${(props) => props.flip && "rotateY(180deg)"};
  }

  @media (max-width: 1200px) {
    .flip-card-inner {
      width: 60%;
    }
  }
  @media (max-width: 769px) {
    .flip-card-inner {
      width: 80%;
    }
  }
  @media (max-width: 490px) {
    .flip-card-inner {
      width: 90%;
      height: 65%;
    }
  }
  @media (max-width: 375px) {
    .flip-card-inner {
      width: 95%;
      height: 90%;
    }
  }
`;

const FlipCard = ({ flip, setFlip, checked, setChecked, theme, setTheme, clientInfo }) => {
  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <Root flip={flip}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <FrontCard
              theme={theme}
              setChecked={setChecked}
              setTheme={setTheme}
              checked={checked}
              handleFlip={handleFlip}
              flip={flip}
              setFlip={setFlip}
              clientInfo={clientInfo}
            />
          </div>
          <div className="flip-card-back">
            <BackCard
              theme={theme}
              setChecked={setChecked}
              setTheme={setTheme}
              checked={checked}
              handleFlip={handleFlip}
              flip={flip}
              clientInfo={clientInfo}
              setFlip={setFlip}
            />
          </div>
        </div>
      </div>
    </Root>
  );
};

export default FlipCard;
