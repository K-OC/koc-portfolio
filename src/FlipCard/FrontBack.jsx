import React, { useState } from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import VidEmbed from "../CodeExamples/VidEmbed";
import ChronikDemo from "../CodeExamples/ChronikDemo";
import AiTrivia from "../AiTrivia";
const Card = styled.div`
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
  justify-content: center;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  transform: rotateX(0deg);
  background-color: ${(props) => props.theme.cardTheme.backgroundColor};
  color: ${(props) => props.theme.cardTheme.fontColor};
  span {
  }
  h4 {
    font-weight: 500;
    font-size: 1.5rem;
    margin: 0;
    overflow: auto;
  }
  h1 {
    margin: 0;
    overflow: show;
  }
  p {
    margin: 0;
    font-weight: 500;
  }
  h3 {
    margin: 0;
  }
`;
const ContactInnerWrapper = styled.div``;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  color: #268bd2;
  z-index: 3;
  &:visited {
    color: #268bd2;
  }
`;

const InnerCtn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  align-items: top;
  gap: 0.4em;

  h3 {
    white-space: nowrap;
    overflow: auto;
    font-size: 1.1rem;
    padding-top: 1.3rem;
  }
`;
const ContactCtn = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.7rem;

  ${ContactInnerWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ItemSelectCtn = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CustomSelectBtn = styled.button`
  color: ${(props) =>
    props.activeTab === true
      ? props.theme.fontColor
      : props.theme.cardTheme.fontColor};
  background-color: ${(props) =>
    props.activeTab === true
      ? props.theme.backgroundColor
      : props.theme.cardTheme.backgroundColor};
  border: 1px solid ${(props) => props.theme.cardTheme.border};
  max-height: 1.1rem;
  cursor: pointer;
`;

const ContentCtn = styled.div`
  height: 100%;
`;
export const BackCard = ({
  theme,
  setChecked,
  setTheme,
  checked,
  handleFlip,
  setFlip,
  flip,
}) => {
  const [selected, setSelected] = useState("");
  const exampleArr = [
    "hamburger",
    "hiddenMessages",
    "chronik api",
    "ai trivia",
  ];
  return (
    <>
      <Card theme={theme}>
        <CardHeader
          theme={theme}
          setChecked={setChecked}
          setTheme={setTheme}
          checked={checked}
          handleFlip={handleFlip}
          flip={flip}
          setFlip={setFlip}
        />{" "}
        <InnerCtn>
          <h3>Code Samples</h3>
          <ItemSelectCtn>
            {exampleArr.map((example) => {
              return (
                <CustomSelectBtn
                  key={example + 1}
                  theme={theme}
                  onClick={() => {
                    setSelected(example);
                  }}
                  activeTab={selected === example ? true : false}
                >
                  {example}
                </CustomSelectBtn>
              );
            })}
          </ItemSelectCtn>
          <ContentCtn>
            {selected === "hamburger" && <VidEmbed embedId={"AY86a9uBreQ"} />}
            {selected === "hiddenMessages" && (
              <VidEmbed embedId={"Vcjxs1sfgtA"} />
            )}
            {selected === "chronik api" && <ChronikDemo theme={theme} />}
            {selected === "ai trivia" && <AiTrivia theme={theme} />}
          </ContentCtn>
        </InnerCtn>
      </Card>
    </>
  );
};

export const FrontCard = ({
  theme,
  setChecked,
  setTheme,
  checked,
  handleFlip,
  setFlip,
  flip,
}) => {
  return (
    <Card theme={theme}>
      {!flip ? (
        <>
          {" "}
          <CardHeader
            theme={theme}
            setChecked={setChecked}
            setTheme={setTheme}
            checked={checked}
            handleFlip={handleFlip}
            flip={flip}
            setFlip={setFlip}
          />
          <span>
            <InnerCtn>
              <h1>Kieran O'Connell</h1>
              <h3>WEB DEVELOPER</h3>
            </InnerCtn>

            <ContactCtn>
              <p>ST. JOHN'S, NL, CANADA</p>
              <ContactInnerWrapper>
                <StyledLink
                  rel="noreferrer noopener"
                  href="https://www.linkedin.com/in/kieran-oc/"
                  target="_blank"
                >
                  Linkedin
                </StyledLink>{" "}
                -{" "}
                <StyledLink
                  href="https://github.com/K-OC"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Github
                </StyledLink>{" "}
                -{" "}
                <StyledLink
                  href="mailto:kieranpoconnell@gmail.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Email
                </StyledLink>
              </ContactInnerWrapper>
            </ContactCtn>
          </span>
        </>
      ) : null}
    </Card>
  );
};
