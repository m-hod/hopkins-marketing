import React, { HTMLAttributes, useState } from "react";
import styles from "./Input.module.scss";
import classnames from "classnames";

type Props = React.HTMLProps<HTMLInputElement | HTMLTextAreaElement> & {
  type?: "input" | "textarea";
  value: string | number;
  label: string;
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
};

function Input(props: Props) {
  const { value, label, onChange, type = "input", ...rest } = props;
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label
        htmlFor={label}
        className={classnames(styles.label, focused && styles.labelFocused)}
      >
        {label}
      </label>
      {type === "textarea" ? (
        //@ts-ignore
        <textarea
          value={value}
          id={label}
          onChange={(e) => onChange(e)}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          className={classnames(
            styles.input,
            styles.textarea,
            focused && styles.inputFocused
          )}
          {...rest}
        />
      ) : (
        //@ts-ignore
        <input
          value={value}
          type="text"
          id={label}
          onChange={(e) => onChange(e)}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          className={classnames(styles.input, focused && styles.inputFocused)}
          {...rest}
        />
      )}
    </div>
  );
}

export default Input;
