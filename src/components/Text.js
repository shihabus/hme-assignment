import React from "react";
import styled from "styled-components";

const TextStyle1 = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #222;
`;

export const Text1 = ({txt}) => {
  return <TextStyle1>{txt}</TextStyle1>;
};

const TextStyle2 = styled.p`
  font-size: 1rem;
  color: #222;
`;

export const Text2 = ({txt}) => {
  return <TextStyle2>{txt}</TextStyle2>;
};
