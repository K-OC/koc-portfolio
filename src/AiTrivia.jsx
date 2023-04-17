import React from "react";
import asset from "./assets/trivia-demo.gif";
import styled from "styled-components";
import { lightTheme } from "./assets/theme";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  position: relative;
  justify-content: center;
  img {
    display: block;
    max-height: 22rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30;
  right: 30;
  height: 100%;
  width: 80%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: ${(props) => props.theme.backgroundColor};
  &:hover {
    opacity: ${(props) => (props.theme === lightTheme ? "0.9" : "0.8")};
  }
`;

const Text = styled.div`
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  padding: 1rem;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: left;
  color: ${(props) => props.theme.fontColor};
  a {
    text-decoration: none;
    color: ${(props) => props.theme.border};
  }
`;

const AiTrivia = ({ theme }) => {
  return (
    <Wrapper theme={theme}>
      <img src={asset} alt="demo of AI trivia app built with Glen May" />
      <Overlay theme={theme}>
        <Text theme={theme}>
          Built in collaboration with{" "}
          <a
            href="https://github.com/ellis0n/"
            rel="noreferrer"
            target="_blank"
          >
            Glen May
          </a>
          , this project leverages the Open Ai API to create custom trivia
          questions on almost any topic imaginable.
        </Text>
      </Overlay>
    </Wrapper>
  );
};

export default AiTrivia;
