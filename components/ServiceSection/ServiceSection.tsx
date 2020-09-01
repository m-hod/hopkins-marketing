import React from "react";
import styles from "./ServiceSection.module.scss";

function ServiceSection({
  title,
  content,
  imageUrl,
  orientation,
  id,
}: {
  title: string;
  content: {
    subtitle: string;
    description: string;
  }[];
  imageUrl: string;
  orientation: "left" | "right";
  id: string;
}) {
  return (
    <div className={styles.container} id={id}>
      <div className={styles.content}>
        <small>{title}</small>
        {content.map((el, i) => (
          <div key={i} className={styles.contentSection}>
            <h3>{el.subtitle}</h3>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})`, gridArea: orientation }}
      />
    </div>
  );
}

export default ServiceSection;
