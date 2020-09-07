import React from "react";
import styles from "./ServiceSection.module.scss";
import Image from "../Image/Image";

function ServiceSection({
  title,
  content,
  webp,
  fallback,
  alt,
  orientation,
  id,
  browserExceptions,
}: {
  title: string;
  content: {
    subtitle: string;
    description: string;
  }[];
  webp: string;
  fallback: string;
  alt?: string;
  orientation: "left" | "right";
  id: string;
  browserExceptions?: boolean;
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
      <Image
        webp={webp}
        fallback={fallback}
        alt={alt}
        containerStyles={styles.image}
        style={{ gridArea: orientation }}
        useBackground={browserExceptions}
      />
    </div>
  );
}

export default ServiceSection;
