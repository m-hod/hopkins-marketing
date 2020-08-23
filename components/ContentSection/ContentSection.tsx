import React from "react";
import styles from "./ContentSection.module.scss";
import classnames from "classnames";

export default function ContentSection({
  heading,
  contents,
  centered,
}: {
  heading: JSX.Element;
  contents: string[];
  centered?: boolean;
}) {
  return (
    <div className={styles.container}>
      <h2 className={classnames(centered && styles.headingCentered)}>
        {heading}
      </h2>
      <div
        className={styles.contentGrid}
        style={{ gridTemplateColumns: `repeat(${contents.length}, 1fr)` }}
      >
        {contents.map((content) => (
          <p>{content}</p>
        ))}
      </div>
    </div>
  );
}
