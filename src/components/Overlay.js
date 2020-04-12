import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const modalRoot = document.getElementById("root");

export class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100vw;
  z-index: 999;
  color: white;
`;

export default function Overlay(props) {
  return (
    <Modal>
      <Wrapper>{props.children}</Wrapper>
    </Modal>
  );
}
