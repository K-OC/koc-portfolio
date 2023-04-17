import React, { useState } from "react";
import styled from "styled-components";
import ChronikCard from "./ChronikCard";
import { chronikMethods } from "./chronikMethods";
import MethodDropdown from "./MethodDropdown";
const Wrapper = styled.div`
  width: 100%;
  max-height: 100%;
  height: 100%;
`;

const ChronikCardCtn = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  flex-direction: column;
`;

const ClickableComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const MethodDesc = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.cardTheme.color};
  @media (max-width: 762px) {
    font-size: 14px;
  }
  h5 {
    margin: 0;
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme.cardTheme.color};
  }
  p {
    text-align: center;
    max-width: 80%;
    border-bottom: 1px solid ${(props) => props.theme.cardTheme.border};
  }
`;
const ChronikDemo = ({ theme }) => {
  const [expandChronikMethodCard, setExpandChronikMethodCard] = useState(
    chronikMethods[0]
  );
  const [userInput, setUserInput] = useState("");
  const handleTextInputChange = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <>
      <Wrapper theme={theme}>
        <ChronikCardCtn>
          <MethodDesc theme={theme}>
            <h5>Demo for the chronik indexer, the eCash block explorer.</h5>
            <p>
              {" "}
              Select a method from the dropdown, copy the default value into the
              input or supply your own.
            </p>
          </MethodDesc>
          <ClickableComponentWrapper>
            <MethodDropdown
              onClick={() => {
                // setExpandChronikMethodCard(method);
              }}
              children={chronikMethods}
              theme={theme}
              expandChronikMethodCard={expandChronikMethodCard}
              setExpandChronikMethodCard={setExpandChronikMethodCard}
              setUserInput={setUserInput}
              userInput={userInput}
            ></MethodDropdown>
          </ClickableComponentWrapper>

          {expandChronikMethodCard !== null && (
            <ChronikCard
              name={expandChronikMethodCard.name}
              description={expandChronikMethodCard.description}
              inputLabel={expandChronikMethodCard.inputLabel}
              example={expandChronikMethodCard.example}
              details={expandChronikMethodCard.details}
              method={expandChronikMethodCard.method}
              isExpanded={true}
              theme={theme}
              userInput={userInput}
              setUserInput={setUserInput}
              handleTextInputChange={handleTextInputChange}
            />
          )}
        </ChronikCardCtn>
      </Wrapper>
    </>
  );
};

export default ChronikDemo;
