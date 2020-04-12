import React, {useState, useContext} from "react";
import styled from "styled-components";
import endpoint from "../configs/endpoint";
import {FormContext} from "../FormContext";
import {LOADING, SUCCESS, FAILED} from "../configs/fetchStatus";
import Overlay from "./Overlay";
import Spinner from "./Spinner";
import Toast from "./Toast";

const Container = styled.form`
  position: relative;
  width: 45%;
  max-width: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: center;
  border-radius: 10px;
  padding: 2.5% 2%;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
`;

const Submit = styled.input`
  background: #e82b28;
  padding: 0.75rem 0.5rem;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;

  :disabled {
    background: #e1e1e1;
    cursor: no-drop;
  }
`;

const loginUser = async (setStatus, successCallBack) => {
  try {
    setStatus(LOADING);
    const data = await fetch(endpoint);
    const resp = await data.json();
    setStatus(SUCCESS);
    successCallBack();
  } catch (error) {
    setStatus(FAILED);
  }
};

const Loader = () => (
  <Overlay>
    <Spinner loadingText="Loading..." />
  </Overlay>
);

const Notification = (type, message) => <Toast type={type} message={message} />;

export default function Form({children}) {
  const [loginState, setLoginState] = useState(null);
  const {resetForm, isFormValid} = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(setLoginState, resetForm);
  };

  return (
    <Container onSubmit={handleSubmit}>
      {children}
      <Submit type="submit" value="Login" disabled={!isFormValid} />
      {loginState === LOADING && Loader()}
      {loginState === SUCCESS && Notification("success", "Login was successful")}
      {loginState === FAILED && Notification("error", "Login failed")}
    </Container>
  );
}
