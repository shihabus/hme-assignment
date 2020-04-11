import React, {useRef} from "react";
import styled from "styled-components";
import isValidUtil from "../utils/validityConfig";

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

export default function Input(props) {
  const inputEl = useRef(null);

  const {
    type,
    onChangeCallBack,
    valueParam: {value, isValid, errorMessage},
  } = props;

  const onValueChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let {isValid, errorMessage} = isValidUtil(type, value, inputEl.current);
    onChangeCallBack({value, isValid, errorMessage});
    inputEl.current.setCustomValidity(isValid ? "" : "true");
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
