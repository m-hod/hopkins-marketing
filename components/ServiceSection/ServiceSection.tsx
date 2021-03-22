import Image from "../Image/Image";
import Link from "next/link";
import React from "react";
import styles from "./ServiceSection.module.scss";

function ServiceSection({
  title,
  content,
  imageUrl,
  alt,
  orientation,
  id,
  browserExceptions,
  portfolioLink,
}: {
  title: string;
  content: {
    subtitle: string;
    description: string;
  }[];
  imageUrl: string;
  alt?: string;
  orientation: "left" | "right";
  id: string;
  browserExceptions?: boolean;
  portfolioLink?: {
    link: string;
    anchor: string;
  };
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
        {portfolioLink && (
          <Link
            href={{
              pathname: portfolioLink.link,
              query: { portfolio: portfolioLink.anchor },
            }}
          >
            <a className={styles.link}>See our work here</a>
          </Link>
        )}
      </div>
      <Image
        url={imageUrl}
        alt={alt}
        containerStyles={styles.image}
        style={{ gridArea: orientation }}
        useBackground={browserExceptions}
      />
    </div>
  );
}

export default ServiceSection;
