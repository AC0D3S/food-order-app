import React from "react";
import ReactDOM, { createPortal } from "react-dom";

import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onHideCart}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
