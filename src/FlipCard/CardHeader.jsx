import React from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown";
import Toggle from "../Toggle";

const CardHeaderCtn = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  top: 1rem;
  position: absolute;
  max-width: 100%;
  width: 100%;
  span {
    h3 {
      font-weight: 700;
      font-size: 1.2rem;
      margin: 0;
      overflow: auto;
    }
    h5 {
      font-weight: 500;
      font-size: 1rem;
      margin-top: 0;
      overflow: auto;
    }
  }
`;

const CardHeader = ({
  theme,
  setChecked,
  setTheme,
  checked,
  handleFlip,
  flip,
  setFlip,
}) => {
  return (
    <CardHeaderCtn>
      <Dropdown
        theme={theme}
        setChecked={setChecked}
        setTheme={setTheme}
        checked={checked}
        handleFlip={handleFlip}
        flip={flip}
        setFlip={setFlip}
        content={!flip ? "projects" : "contact"}
      />

      <Toggle
        setChecked={setChecked}
        setTheme={setTheme}
        theme={theme}
        checked={checked}
      />
    </CardHeaderCtn>
  );
};

export default CardHeader;
