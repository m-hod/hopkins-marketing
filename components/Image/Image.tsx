import React from "react";
import styles from "./Image.module.scss";
import classnames from "classnames";

function Image({
  webp,
  fallback,
  alt,
  containerStyles,
  useBackground,
  ...rest
}: {
  webp: string;
  fallback: string;
  alt: string;
  containerStyles?: string;
  useBackground?: boolean;
} & React.HTMLProps<HTMLPictureElement>) {
  console.log(useBackground);
  return useBackground ? (
    <div
      className={classnames(
        containerStyles,
        useBackground && styles.literalBackgroundImage
      )}
      style={{
        ...rest.style,
        backgroundImage: `url(${fallback})`,
      }}
    />
  ) : (
    <picture className={classnames(containerStyles)} {...rest}>
      <>
        <source srcSet={webp} type="image/webp" />
        <img src={fallback} className={styles.backgroundImage} alt={alt} />
      </>
    </picture>
  );
}

export default Image;
