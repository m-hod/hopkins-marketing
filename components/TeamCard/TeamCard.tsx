import React from "react";
import styles from "./TeamCard.module.scss";
import Image from "../Image/Image";

function TeamCard({
  name,
  role,
  description,
  pfpwebp,
  pfpFallback,
  pfpAlt,
  webp,
  fallback,
  alt,
}: {
  name: string;
  role: string;
  description: string;
  pfpwebp: string;
  pfpFallback: string;
  pfpAlt?: string;
  webp: string;
  fallback: string;
  alt?: string;
}) {
  return (
    <div
      className={styles.container}
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Image
        webp={webp}
        fallback={fallback}
        alt={alt}
        containerStyles={styles.image}
      />
      <div className={styles.content}>
        <Image
          webp={pfpwebp}
          fallback={pfpFallback}
          alt={pfpAlt}
          containerStyles={styles.profile}
        />
        <div className={styles.titles}>
          <p>{name}</p>
          <p>{role}</p>
        </div>
        <div className={styles.spacer} />
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default TeamCard;
