import React from "react";
import styles from "./Image.module.scss";

function Image({
  webp,
  fallback,
  alt,
  containerStyles,
  ...rest
}: {
  webp: string;
  fallback: string;
  alt: string;
  containerStyles?: string;
} & React.HTMLProps<HTMLPictureElement>) {
  return (
    <picture className={containerStyles} {...rest}>
      <source srcSet={webp} type="image/webp" />
      <img src={fallback} className={styles.backgroundImage} alt={alt} />
    </picture>
  );
}

export default Image;
