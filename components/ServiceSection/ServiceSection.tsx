import React from "react";
import styles from "./ServiceSection.module.scss";
import classnames from "classnames";
import { Content } from "../Page/Page";

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
      <div className={styles.content} style={{ gridArea: orientation }}>
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
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
}

export default ServiceSection;
