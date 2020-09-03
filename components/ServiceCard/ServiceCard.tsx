import React, { useState } from "react";
import styles from "./ServiceCard.module.scss";
import classnames from "classnames";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "../Image/Image";

function ServiceCard({
  title,
  webp,
  fallback,
  alt,
  to,
  query,
  services,
}: {
  title: string;
  webp: string;
  fallback: string;
  alt?: string;
  to: string;
  query: string;
  services: string[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Link href={{ pathname: to, query: { service: query } }}>
      <div
        className={styles.container}
        onMouseOver={() => {
          setIsExpanded(true);
        }}
        onMouseLeave={() => {
          setIsExpanded(false);
        }}
      >
        <div>
          <h3>{title}</h3>
          <div
            className={classnames(
              styles.content,
              isExpanded && styles.contentExpanded
            )}
          >
            <ul>
              {services.map((service, i) => (
                <li key={i}>- {service}</li>
              ))}
            </ul>
            <Link href={{ pathname: to, query: { service: query } }}>
              <a className={styles.link}>
                Find out more <FaChevronRight size={12} />
              </a>
            </Link>
          </div>
        </div>
        <div
          className={classnames(
            styles.overlay,
            isExpanded && styles.overlayExpanded
          )}
        />
        <Image
          webp={webp}
          fallback={fallback}
          alt={alt}
          containerStyles={styles.backgroundImageContainer}
        />
      </div>
    </Link>
  );
}

export default ServiceCard;
