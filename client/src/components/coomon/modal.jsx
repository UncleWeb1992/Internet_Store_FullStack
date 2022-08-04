import React from "react";

const Modal = ({ active, setActive, children }) => {
  const modalClose = () => {
    setActive(false);
    document.body.style.overflowY = "auto";
  };

  if (active) {
    document.body.style.overflow = "hidden";
    return (
      <div className="modal" hidden={!active} id="modal" onClick={modalClose}>
        <div
          className={"modal__container" + (active ? " active" : "")}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal__close" onClick={modalClose}></div>
          <div className="modal__content">{children}</div>
        </div>
      </div>
    );
  } else document.body.style.overflow = "auto";
};

export default Modal;
