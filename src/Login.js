import React, {useContext} from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Logo from "./components/Logo";
import {Text1, Text2} from "./components/Text";
import Input from "./components/Input";
import {FormContext} from "./FormContext";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Login() {
  const {onFieldValueChange, isFormValid, email} = useContext(FormContext);

  console.log("isFormValid", isFormValid, "|", email);
  return (
    <Wrapper>
      <Form>
        <Logo logoWidth="50%" />
        <Text1 txt="Sign In" />
        <Text2 txt="Use you Healthifyme Account" />
        <Input
          type="email"
          onChangeCallBack={(param) => {
            onFieldValueChange({key: "email", ...param});
          }}
        />
        <Input
          type="password"
          onChangeCallBack={(param) => {
            onFieldValueChange({key: "password", ...param});
          }}
        />
      </Form>
    </Wrapper>
  );
}
