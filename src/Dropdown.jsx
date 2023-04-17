import React, { useState, useEffect, useRef  } from "react";
import styled from "styled-components";
const NavWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  padding: 1.5rem 0rem 0rem 1.5rem;
`;

const NavIcon = styled.span`
  position: relative;
  background-color: ${(props) =>
    props.clicked ? "transparent" : props.theme.cardTheme.fontColor};
  width: 2rem;
  height: 2px;
  display: inline-block;
  transition: transform 300ms, top 300ms, background-color 300ms;
  &::before,
  &::after {
    content: "";
    background-color: ${(props) => props.theme.cardTheme.fontColor};
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: transform 300ms, top 300ms, background-color 300ms;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const NavMenu = styled.div`
  position: fixed;
  float: left;
  top: 4.1rem;
  left: 1.4rem;
  display: flex;
  width: 8.23rem;
  flex-direction: column;
  border: ${(props) => (props.open ? "1px solid" : "0px solid")};
  border-color: ${(props) =>
    props.open ? props.theme.cardTheme.fontColor : "transparent"};
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-right: 0;
  }
  overflow: hidden;
  transition: ${(props) =>
    props.open
      ? "max-height 1000ms ease-in-out , border-color 800ms ease-in-out, border-width 800ms ease-in-out"
      : "max-height 300ms cubic-bezier(0, 1, 0, 1), border-color 600ms ease-in-out, border-width 800ms ease-in-out"};
  max-height: ${(props) => (props.open ? "100rem" : "0")};
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

const Dropdown = ({ handleFlip, theme, content }) => {
  const [navMenuClicked, setNavMenuClicked] = useState(false);
  const ref = useRef();

  const handleNavMenuClick = () => {
    setNavMenuClicked(!navMenuClicked);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavMenuClicked(false);
      }
    };
    if(typeof document !== 'undefined'){
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <NavWrapper theme={theme} onClick={handleNavMenuClick} ref={ref}>
        <NavIcon clicked={navMenuClicked} theme={theme} />
        <NavMenu open={navMenuClicked} theme={theme}>
          <NavItem theme={theme} onClick={handleFlip}>
            {content}
          </NavItem>
        </NavMenu>
      </NavWrapper>
    </>
  );
};

export default Dropdown;
