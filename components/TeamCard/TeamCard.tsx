import React from "react";
import styles from "./TeamCard.module.scss";
import Image from "../Image/Image";

function TeamCard({
  name,
  role,
  description,
  pfpImageUrl,
  pfpAlt,
  imageUrl,
  alt,
}: {
  name: string;
  role: string;
  description: string;
  pfpImageUrl: string;
  pfpAlt?: string;
  imageUrl: string;
  alt?: string;
}) {
  return (
    <div
      className={styles.container}
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Image url={imageUrl} alt={alt} containerStyles={styles.image} />
      <div className={styles.content}>
        <Image
          url={pfpImageUrl}
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
