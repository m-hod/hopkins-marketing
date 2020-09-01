import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

let rootEl;
let modalEl;

if (process.browser) {
  rootEl = document.getElementById("__next");
  modalEl = document.createElement("div");
}

function Modal({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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

  if (!rootEl || !modalEl) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.container}
      onClick={() => {
        setIsOpen(false);
      }}
      style={{ top: document.documentElement.scrollTop }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.contentContainer}
      >
        {children}
      </div>
    </div>,
    modalEl
  );
}

export default Modal;
