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
  flex-direction: column;
`;

export default function Login() {
  const {onFieldValueChange, password, email} = useContext(FormContext);

  return (
    <Wrapper>
      <Form>
        <Logo logoWidth="50%" />
        <Text1 txt="Sign In" />
        <Text2 txt="Use you Healthifyme Account" />
        <Input
          type="email"
          placeholder="Enter your email"
          valueParam={email}
          onChangeCallBack={(param) => onFieldValueChange({key: "email", ...param})}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          valueParam={password}
          onChangeCallBack={(param) => onFieldValueChange({key: "password", ...param})}
        />
      </Form>
    </Wrapper>
  );
}
