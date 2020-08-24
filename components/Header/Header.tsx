import React, { HTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

function Header({ mode = "sticky" }: { mode?: "sticky" | "fixed" }) {
  return (
    <header className={styles.container} style={{ position: mode }}>
      <NavLink to="/home" label="Home" />
      <NavLink to="/services" label="Services" />
      <NavLink
        to="/about"
        label="About"
        nativeAttribs={{ style: { marginRight: 64 } }}
      />
      <Button
        color="white"
        title="CONTACT"
        action={() => {
          console.log("hi");
        }}
      />
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
