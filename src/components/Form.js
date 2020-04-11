import React, {useState, useContext} from "react";
import styled from "styled-components";
import endpoint from "../configs/endpoint";
import {FormContext} from "../FormContext";
import {LOADING, SUCCESS, FAILED} from "../configs/fetchStatus";

const Container = styled.form`
  width: 45%;
  max-width: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: center;
  border-radius: 10px;
  padding: 2.5% 1.5%;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
`;

const Submit = styled.input`
  background: #e82b28;
  padding: 0.75rem 0.5rem;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  border: none;

  :disabled {
    background: #e1e1e1;
    cursor: no-drop;
  }
`;

const loginUser = async (setStatus) => {
  try {
    setStatus(LOADING);
    const data = await fetch(endpoint);
    const resp = await data.json();
    setStatus(SUCCESS);
  } catch (error) {
    setStatus(FAILED);
  }
};

console.log("dadd");

export default function Form({children}) {
  const {resetForm, loginStatusChange, isFormValid} = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginStatusChange);
    resetForm();
  };

  return (
    <Container onSubmit={handleSubmit}>
      {children}
      <Submit type="submit" value="Login" disabled={!isFormValid} />
    </Container>
  );
}
