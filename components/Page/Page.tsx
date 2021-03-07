import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Page.module.scss";
import { ContactForm } from "../../types";

export function Wrapper({
  children,
  form,
  headerMode = "sticky",
  headerColor = "brand",
}: {
  children: React.ReactNode;
  form: ContactForm;
  headerMode?: "sticky" | "fixed";
  headerColor?: "brand" | "white";
}) {
  return (
    <main className={styles.page}>
      <Header mode={headerMode} color={headerColor} formContent={form} />
      {children}
      <Footer formContent={form} />
    </main>
  );
}

export function Content({ children }: { children: React.ReactNode }) {
  return (
    <article className={styles.container}>
      <div className={styles.content}>{children}</div>
    </article>
  );
}
