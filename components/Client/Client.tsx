import React from "react";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import styles from "./Client.module.scss";

function Client({
  name,
  url,
  image,
  socials,
  tags,
  description,
}: {
  name: string;
  url: string;
  image: string;
  socials: {
    url: string;
    icon: IconType;
  }[];
  tags: string[];
  description: string;
}) {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.content}>
        <div className={styles.contentGrid}>
          <div className={styles.title}>
            <h4>{name}</h4>
            <p>{url}</p>
          </div>
          <div className={styles.metadata}>
            <div>
              {tags.map((tag) => (
                <span className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.socials}>
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link href={social.url}>
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
