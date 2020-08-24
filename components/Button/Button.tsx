import React, { HTMLAttributes } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";

function Button(
  props: {
    color?: "white" | "brand";
    title: string;
    action: Function;
  } & HTMLAttributes<HTMLButtonElement>
) {
  const { color = "white", title, action, ...rest } = props;
  return (
    <button
      onClick={() => action()}
      className={classnames(styles.button, styles[color])}
      {...rest}
    >
      {title}
    </button>
  );
}

export default Button;
