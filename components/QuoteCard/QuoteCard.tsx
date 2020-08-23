import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "./QuoteCard.module.scss";

function QuoteCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className={styles.container}>
      <FaQuoteLeft />
      <p className={styles.quote}>{quote}</p>
      <small className={styles.author}>{author}</small>
    </div>
  );
}

export default QuoteCard;
