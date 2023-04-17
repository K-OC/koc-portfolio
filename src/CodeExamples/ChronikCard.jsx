import React, { useState } from "react";
import styled from "styled-components";
import { ThemedCopy } from "../assets/CustomIcons";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  gap: 0.3rem;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.cardTheme.color};
`;

const StyledSubmit = styled.button`
  color: ${(props) => props.theme.cardTheme.fontColor};
  background-color: ${(props) => props.theme.cardTheme.backgroundColor};
  border: 1px solid ${(props) => props.theme.cardTheme.border};
`;

const ExampleCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  flex-wrap: wrap;
`;
const ExampleCode = styled.pre`
  background-color: black;
  color: white;
  font-size: 14px;
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  float: left;
  text-align: center;
  white-space: wrap;
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
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

const StyledInput = styled.input`
  font-size: 16px;
  width: 100%;
  height: 2rem;
`;

const InputCtn = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  color: ${(props) => props.theme.fontColor};
  border: 1px solid ${(props) => props.theme.border};
  border-bottom: 0px solid transparent;
  font-size: 1.5rem;
  top: -1.9rem;
  cursor: pointer;
  left: 0rem;
  z-index: 10;
`;

const CodePopup = styled.div`
  position: ${(props) =>
    props.checkResult === JSON.stringify("Please enter a valid input")
      ? ""
      : "absolute"};
  text-align: left;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  max-width: 100%;
  overflow-y: scroll;
  background-color: black;
  z-index: 10;
  color: white;
  pre {
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }
`;

const InnerInputCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    &:hover {
      fill: #00abe7;
    }
  }
  span {
    margin: 0 !important;
  }
`;

const ChronikDemo = ({
  name,
  description,
  inputLabel,
  method,
  isExpanded,
  example,
  details,
  theme,
  userInput,
  setUserInput,
  handleTextInputChange,
}) => {
  const [result, setResult] = useState("");

  const handleCopyExample = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(example);
    }
  };

  return (
    <>
      {JSON.stringify(result) !== "Please enter a valid input" &&
        result.length > 0 && (
          <CloseButton
            theme={theme}
            onClick={() => {
              setResult("");
            }}
          >
            X
          </CloseButton>
        )}

      <Wrapper theme={theme}>
        {" "}
        <MethodDesc theme={theme}>{description}</MethodDesc>
        <ExampleCtn>
          <ExampleCode>{details}</ExampleCode>
        </ExampleCtn>
        <InputCtn>
          <InnerInputCtn>
            <StyledInput
              placeholder={inputLabel}
              value={userInput}
              onChange={(e) => {
                handleTextInputChange(e);
              }}
            />
            <span title="Copy example or provide your own">
              <ThemedCopy onClick={handleCopyExample} />
            </span>
          </InnerInputCtn>
          <StyledSubmit
            theme={theme}
            onClick={async () => {
              const response = await method(userInput);
              if (response) {
                setResult(response);
              } else setResult(JSON.stringify("Please enter a valid input"));
            }}
          >
            Try it
          </StyledSubmit>
        </InputCtn>
        {result.length > 0 && (
          <CodePopup checkResult={result}>
            {result !== JSON.stringify("Please enter a valid input") ? (
              <pre>{JSON.stringify(JSON.parse(result), null, 2)}</pre>
            ) : (
              <div>{result}</div>
            )}
          </CodePopup>
        )}
      </Wrapper>
    </>
  );
};

export default ChronikDemo;
