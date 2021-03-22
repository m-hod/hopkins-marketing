import React from "react";
import { baseUrl } from "../../utils/contants";
import classnames from "classnames";
import styles from "./Image.module.scss";

function Image({
  url,
  alt,
  containerStyles,
  useBackground,
  ...rest
}: {
  url: string;
  alt: string;
  containerStyles?: string;
  useBackground?: boolean;
} & React.HTMLProps<HTMLPictureElement>) {
  return useBackground ? (
    <div
      className={classnames(
        containerStyles,
        useBackground && styles.literalBackgroundImage
      )}
      style={{
        ...rest.style,
        backgroundImage: `url(${url})`,
      }}
    />
  ) : (
    <picture className={classnames(containerStyles)} {...rest}>
      <>
        <img src={`${url}`} className={styles.backgroundImage} alt={alt} />
      </>
    </picture>
  );
}

export default Image;
