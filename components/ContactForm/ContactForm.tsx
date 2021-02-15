import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./ContactForm.module.scss";
import Input from "../Input/Input";
import ReCaptcha from "react-google-recaptcha";

type State = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  message: string;
};

function ContactForm({ buttonColor }: { buttonColor: "white" | "brand" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<
    "default" | "loading" | "submitted" | "error" | "captcha"
  >("default");
  const [state, setState] = useState<State>({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [captcha, setCaptcha] = useState("");

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
            {status === "submitted" ? (
              <>
                <h3>
                  <span>Thanks</span> for your message. We're looking forward to
                  working with you and we'll be in <span>touch</span> shortly.
                </h3>
                <div className={styles.buttonContainer}>
                  <Button
                    color={"brand"}
                    title="Back"
                    action={() => {
                      setIsOpen(false);
                    }}
                  />
                </div>
              </>
            ) : (
              <>
                <h3>
                  Whether you’ve got a burning <span>idea</span> you want to
                  make reality, a <span>business</span> that you’re ready to
                  take to the next level, or simply have a question about{" "}
                  <span>marketing</span>, we’re ready and waiting.
                </h3>
                <form
                  className={styles.formContent}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!captcha) {
                      setStatus("captcha");
                      return;
                    }
                    setStatus("loading");
                    const res = await fetch("/api/email", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        ...state,
                        captcha,
                      }),
                    });
                    if (res.status === 200) {
                      setStatus("submitted");
                    } else {
                      setStatus("error");
                    }
                  }}
                >
                  <div className={styles.inputsGrid}>
                    <Input
                      name="first_name"
                      value={state.first_name}
                      label="First Name"
                      onChange={(e) => {
                        const newValue = e.target.value;
                        updateState(newValue, "first_name");
                      }}
                      required
                    />
                    <Input
                      name="last_name"
                      value={state.last_name}
                      label="Last Name"
                      onChange={(e) => {
                        const newValue = e.target.value;
                        updateState(newValue, "last_name");
                      }}
                    />
                    <Input
                      name="phone"
                      value={state.phone}
                      label="Phone"
                      onChange={(e) => {
                        const newValue = e.target.value;
                        updateState(newValue, "phone");
                      }}
                      type="number"
                    />
                    <Input
                      name="email"
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
                        name="message"
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
                  <div className={styles.captchaContainer}>
                    <ReCaptcha
                      sitekey={
                        process.env.NEXT_PUBLIC_GOOGLE_RECATPCHA_CLIENT_KEY
                      }
                      onChange={(e) => {
                        if (status === "captcha") {
                          setStatus("default");
                        }
                        console.log(e);
                        setCaptcha(e);
                      }}
                    />
                    {status === "captcha" && (
                      <p>
                        Please complete the captcha before submitting the form.
                      </p>
                    )}
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button
                      title="SUBMIT"
                      color="brand"
                      loading={status === "loading"}
                      style={{ width: 150, height: 30 }}
                    />
                    {status === "error" && (
                      <p>
                        Oops! Looks like something went wrong. Please try again,
                        or feel free to give us a call on +64 021 111 1111.
                      </p>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

export default ContactForm;
