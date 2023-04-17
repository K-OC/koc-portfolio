import React, { useState } from "react";
import styled from "styled-components";
const NavWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.cardTheme.border};
  margin: 0;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  padding: 0.2rem 0.5rem;
`;

const NavHeader = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.clicked ? "transparent" : props.theme.cardTheme.backgroundColor};

  display: inline-block;
`;

const NavMenu = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  width: 8.23rem;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
  overflow: hidden;
  transition: ${(props) =>
    props.open
      ? "max-height 300ms ease-in-out"
      : "max-height 400ms cubic-bezier(0, 1, 0, 1)"};
  max-height: ${(props) => (props.open ? "10rem" : "0")};
`;

const NavItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  height: 2rem;
  background-color: ${(props) => props.theme.cardTheme.backgroundColor};
  border: none;
  color: ${(props) => props.theme.cardTheme.fontColor};
  gap: 6px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.border};
    svg {
      fill: ${(props) => props.theme.border};
    }
  }
  svg {
    fill: ${(props) => props.theme.border};
    max-width: 26px;
    height: auto;
    flex: 1;
  }
  p {
    flex: 2;
    margin: 0;
  }
  ${({ active, ...props }) =>
    active &&
    `    
        color: ${props.theme.border};
        svg {
            fill: ${props.theme.border};
        }
  `}
`;

export const NavButton = styled.button`
  :focus,
  :active {
    outline: none;
  }
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  font-size: 10px;
  svg {
    fill: ${(props) => props.theme.contrast};
    width: 26px;
    height: auto;
  }
  ${({ active, ...props }) =>
    active &&
    `    
        color: ${props.theme.border};
        svg {
            fill: ${props.theme.border};
        }
  `}
`;
const MethodDropdown = ({
  theme,
  children,
  expandChronikMethodCard,
  setExpandChronikMethodCard,
  setUserInput,
  userInput,
}) => {
  const [chronikMenuClicked, setChronikMenuClicked] = useState(false);

  const handleChronikMenuClicked = () => {
    setChronikMenuClicked(!chronikMenuClicked);
  };
  return (
    <>
      <NavWrapper theme={theme} onClick={handleChronikMenuClicked}>
        <NavHeader clicked={chronikMenuClicked} theme={theme}>
          {expandChronikMethodCard
            ? expandChronikMethodCard.name + "˅"
            : "Select a method ˅"}
        </NavHeader>
        <NavMenu open={chronikMenuClicked} theme={theme}>
          {children &&
            children.map((child) => {
              return (
                <NavItem
                  theme={theme}
                  onClick={() => {
                    setExpandChronikMethodCard(child);
                    setUserInput("");
                  }}
                  key={child.name + "key"}
                >
                  {child.name}
                </NavItem>
              );
            })}
        </NavMenu>
      </NavWrapper>
    </>
  );
};

export default MethodDropdown;
