import React from "react";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import styles from "./Client.module.scss";
import Image from "../Image/Image";

function Client({
  name,
  url,
  webp,
  fallback,
  alt,
  socials,
  tags,
  description,
}: {
  name: string;
  url: string;
  webp;
  fallback: string;
  alt?: string;
  socials: {
    url: string;
    icon: IconType;
  }[];
  tags: string[];
  description: string;
}) {
  return (
    <div className={styles.container}>
      <Image
        webp={webp}
        fallback={fallback}
        alt={alt}
        containerStyles={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.contentGrid}>
          <div className={styles.title}>
            <h4>{name}</h4>
            <p>{url}</p>
          </div>
          <div className={styles.metadata}>
            <div className={styles.tagContainer}>
              {tags.map((tag, i) => (
                <span key={i} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.socials}>
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <Link key={i} href={social.url}>
                    <a>
                      <Icon />
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Client;
