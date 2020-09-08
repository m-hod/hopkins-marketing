import React, { HTMLAttributes } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";
import { CircularProgress } from "@material-ui/core";

function Button(
  props: {
    color?: "white" | "brand";
    title: string;
    action?: Function;
    loading?: boolean;
  } & HTMLAttributes<HTMLButtonElement>
) {
  const { color = "white", title, action, ...rest } = props;
  return (
    <button
      onClick={() => {
        action && action();
      }}
      className={classnames(styles.button, styles[color])}
      {...rest}
    >
      {props.loading ? <CircularProgress size={18} color="inherit" /> : title}
    </button>
  );
}

export default Button;
