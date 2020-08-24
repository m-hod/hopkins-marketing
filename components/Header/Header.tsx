import React, { HTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import classnames from "classnames";

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
        <NavLink to="/home" label="Home" />
        <NavLink to="/services" label="Services" />
        <NavLink
          to="/about"
          label="About"
          nativeAttribs={{ style: { marginRight: 64 } }}
        />
        <Button
          color={color}
          title="CONTACT"
          action={() => {
            console.log("hi");
          }}
        />
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
        <a className={styles.navLink} {...nativeAttribs}>
          {label}
        </a>
      </Link>
    </div>
  );
}
