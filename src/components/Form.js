import React from "react";
import styled from "styled-components";

const Container = styled.form`
  width: 40%;
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

export default function Form(props) {
  const {handleSubmit, children} = props;
  return <Container onSubmit={handleSubmit}>{children}</Container>;
}

Form.defaultProps = {
  handleSubmit: () => {},
};
