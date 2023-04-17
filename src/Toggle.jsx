import React from "react";
import { ThemedStars } from "./assets/CustomIcons";
import styled from "styled-components";
import { darkTheme, lightTheme } from "./assets/theme";
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1.5rem 1.5rem 0rem 0rem;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.border};
  width: 2.3rem;
  height: 1rem;
  background: #2aa198;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  ${ThemedStars} {
    position: absolute;
    display: ${(props) => (props.checked === true ? "block" : "none")};
  }
  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: rgb(255, 191, 0);
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${Switch} {
    background: #002b36;

    &:before {
      transform: translate(1.4rem, -50%);
      background: #eee8d5;
    }
  }
`;
const Toggle = ({ checked, setChecked, theme, setTheme }) => {
  const handleChange = (e) => {
    setChecked(!checked);
    if (theme.backgroundColor === lightTheme.backgroundColor) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch checked={checked}>
        <ThemedStars />
      </Switch>
    </Label>
  );
};

export default Toggle;
