import React, { HTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import classnames from "classnames";
import ContactForm from "../ContactForm/ContactForm";

function Header({
  mode = "sticky",
  color = "brand",
}: {
  mode?: "sticky" | "fixed";
  color: "brand" | "white";
}) {
  return (
    <header
      className={classnames(styles.container, styles[color])}
      style={{ position: mode }}
    >
      <div>
        {color === "brand" && (
          <Link href="/">
            <a>
              <img src="/images/logo.svg" className={styles.logo} />
            </a>
          </Link>
        )}
      </div>

      <div className={styles.linksContainer}>
        <NavLink to="/" label="Home" />
        <NavLink to="/services" label="Services" />
        <NavLink
          to="/about"
          label="About"
          nativeAttribs={{
            className: styles.lastLink,
          }}
        />
        <ContactForm buttonColor={color} />
      </div>
    </header>
  );
}

export default Header;

function NavLink({
  to,
  label,
  nativeAttribs,
}: {
  to: string;
  label: string;
  nativeAttribs?: HTMLAttributes<HTMLAnchorElement>;
}) {
  return (
    <div>
      <Link href={to}>
        <a
          {...nativeAttribs}
          className={classnames(styles.navLink, nativeAttribs?.className)}
        >
          {label}
        </a>
      </Link>
    </div>
  );
}
