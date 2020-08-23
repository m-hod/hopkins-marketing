import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <NavLink to="/about" label="ABOUT" />
      <NavLink to="/blog" label="BLOG" />

      <div>
        <Link href="/">
          <a className={styles.home}>
            <div className={styles.sub}>AARON</div>
            <div className={styles.primary}>HODGES</div>
            <div className={styles.alt}>AUTHOR</div>
          </a>
        </Link>
      </div>

      <NavLink to="/books" label="BOOKS" />
      <NavLink to="/worlds" label="WORLDS" />
    </header>
  );
}

export default Header;

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <div>
      <Link href={to}>
        <a className={styles.navLink}>{label}</a>
      </Link>
    </div>
  );
}
