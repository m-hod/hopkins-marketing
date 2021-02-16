import React from "react";
import styles from "./Image.module.scss";
import classnames from "classnames";
import { baseUrl } from "../../utils/contants";

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
        backgroundImage: `url(${baseUrl}${url})`,
      }}
    />
  ) : (
    <picture className={classnames(containerStyles)} {...rest}>
      <>
        {/* <source srcSet={webp} type="image/webp" /> */}
        <img
          src={`${baseUrl}${url}`}
          className={styles.backgroundImage}
          alt={alt}
        />
      </>
    </picture>
  );
}

export default Image;
