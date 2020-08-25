import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Modal({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  const rootEl = document.getElementById("__next");
  const modalEl = document.createElement("div");

  const scrollPositionAtRender = useRef(document.documentElement.scrollTop);

  useEffect(() => {
    function disableScroll() {
      window.scrollTo(0, scrollPositionAtRender.current);
    }
    if (isOpen) {
      window.addEventListener("scroll", disableScroll);
      return () => {
        window.removeEventListener("scroll", disableScroll);
      };
    } else {
      window.removeEventListener("scroll", disableScroll);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      rootEl.appendChild(modalEl);
      return () => {
        rootEl.removeChild(modalEl);
      };
    } else {
      rootEl.removeChild(modalEl);
    }
  }, []);

  return ReactDOM.createPortal(children, modalEl);
}

export default Modal;
