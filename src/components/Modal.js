import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../actions/modalActions";
import "./Modal.css";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { openClose, content } = modal;
  let modalInlineStyle;
  if (openClose === "open") {
    modalInlineStyle = {
      display: "flex",
    };
  } else {
    modalInlineStyle = {
      display: "none",
    };
  }
  const closeModalHandler = () => {
    dispatch(closeModal())
  };
  return (
    <div className="site_modal" style={modalInlineStyle}>
      <div className="modal_content">
        <div className="col_right">
          <span onClick={closeModalHandler} className="close">
            &times;
          </span>
        </div>
        <div className="">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
