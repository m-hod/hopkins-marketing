import React from "react";
import styles from "./TeamCard.module.scss";

function TeamCard({
  profilePicture,
  name,
  role,
  description,
  backgroundImage,
}: {
  profilePicture: string;
  name: string;
  role: string;
  description: string;
  backgroundImage: string;
}) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>
        <div
          className={styles.profile}
          style={{ backgroundImage: `url(${profilePicture})` }}
        />
        <div className={styles.titles}>
          <p>{name}</p>
          <p>{role}</p>
        </div>
        <div />
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default TeamCard;
