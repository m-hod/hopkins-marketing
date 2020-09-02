import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./ContactForm.module.scss";
import Input from "../Input/Input";
import { sendEmail } from "../../api";

type State = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  message: string;
};

function ContactForm({ buttonColor }: { buttonColor: "white" | "brand" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<State>({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
  });

  function updateState(e: string, key: keyof State) {
    setState((prevState) => {
      const newState = { ...prevState };
      newState[key] = e;
      return newState;
    });
  }

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
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className={styles.container}>
            <h1>Contact us</h1>
            <h3>
              Excepteur sint occaecat <span>cupidatat</span> non proident, sunt
              in culpa qui official. Excepteur sint occaecat{" "}
              <span>cupidatat</span> non proident, sunt in culpa qui official.{" "}
            </h3>
            <form
              className={styles.formContent}
              onSubmit={(e) => {
                e.preventDefault();
                sendEmail(state);
              }}
            >
              <div className={styles.inputsGrid}>
                <Input
                  value={state.first_name}
                  label="First Name"
                  onChange={(e) => {
                    const newValue = e.target.value;
                    updateState(newValue, "first_name");
                  }}
                  required
                />
                <Input
                  value={state.last_name}
                  label="Last Name"
                  onChange={(e) => {
                    const newValue = e.target.value;
                    updateState(newValue, "last_name");
                  }}
                />
                <Input
                  value={state.phone}
                  label="Phone"
                  onChange={(e) => {
                    const newValue = e.target.value;
                    updateState(newValue, "phone");
                  }}
                  type="number"
                />
                <Input
                  value={state.email}
                  label="Email Address"
                  onChange={(e) => {
                    const newValue = e.target.value;
                    updateState(newValue, "email");
                  }}
                  required
                  type="email"
                />
                <div style={{ gridColumn: "span 2" }}>
                  <Input
                    use="textarea"
                    value={state.message}
                    label="Message"
                    onChange={(e) => {
                      const newValue = e.target.value;
                      updateState(newValue, "message");
                    }}
                    required
                    minLength={50}
                  />
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <Button title="SUBMIT" color="brand" />
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ContactForm;
