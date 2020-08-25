import React, { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./ContactForm.module.scss";

function ContactForm({ buttonColor }: { buttonColor: "white" | "brand" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        color={buttonColor}
        title="CONTACT"
        action={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && (
        <Modal isOpen={isOpen}>
          <div
            className={styles.container}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            hi
          </div>
        </Modal>
      )}
    </>
  );
}

export default ContactForm;
