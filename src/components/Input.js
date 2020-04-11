import React, {useState, useRef, useEffect, useReducer} from "react";
import styled from "styled-components";
import rulesConfig from "../utils/inputAttributes";
import isValidUtil from "../utils/validityConfig";
import useStateHook from "../useStateHook";

const Wrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  height: 4rem;
`;

const InputField = styled.input`
  padding: 5px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.5rem;

  ::placeholder {
    color: #e1e1e1;
    font-size: 1.25rem;
  }

  :invalid {
    border: 1px solid #c12e2e;
  }

  :focus {
    border: 1px solid blue;
  }
`;

const ErrorText = styled.p`
  margin-top: 0.25rem;
  font-size: 0.975rem;
  color: #c12e2e;
`;

const initialState = {
  value: "",
  isValid: false,
  errorMessage: "",
};

export default function Input(props) {
  const [inputState, setInputState] = useStateHook(initialState);
  const {value, isValid, errorMessage} = inputState;

  const inputEl = useRef(null);

  const {type, onChangeCallBack} = props;

  const attrs = rulesConfig(type);

  const onValueChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let {isValid, errorMessage} = isValidUtil(attrs, value, inputEl.current);
    onChangeCallBack(inputState);
    inputEl.current.setCustomValidity(isValid ? "" : "true");
    setInputState({
      value,
      isValid,
      errorMessage,
    });
  };

  return (
    <Wrapper>
      <InputField ref={inputEl} {...props} value={value} onChange={onValueChange} />
      {!isValid && <ErrorText>{errorMessage}</ErrorText>}
    </Wrapper>
  );
}

Input.defaultProps = {
  type: "password",
  error: false,
  errorMessage: "",
  onChangeCallBack: () => {},
};
