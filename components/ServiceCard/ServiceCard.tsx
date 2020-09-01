import React, { useState } from "react";
import styles from "./ServiceCard.module.scss";
import classnames from "classnames";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function ServiceCard({
  title,
  background,
  to,
  query,
  services,
}: {
  title: string;
  background: string;
  to: string;
  query: string;
  services: string[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
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
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${background})` }}
      />
    </div>
  );
}

export default ServiceCard;
