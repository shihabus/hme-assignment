import React from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Logo from "./components/Logo";
import {Text1, Text2} from "./components/Text";
import Input from "./components/Input";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Login() {
  return (
    <Wrapper>
      <Form>
        <Logo logoWidth="50%" />
        <Text1 txt="Sign In" />
        <Text2 txt="Use you Healthifyme Account" />
        <Input
          type="email"
          onChangeCallBack={(x) => {
            console.log("x", x);
          }}
        />
        <Input type="password" />
      </Form>
    </Wrapper>
  );
}
