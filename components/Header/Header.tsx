import React, { HTMLAttributes, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import classnames from "classnames";
import ContactForm from "../ContactForm/ContactForm";
import useMediaQuery, { mobile } from "../../hooks/useMediaQuery";
import { ContactForm as ContactFormType } from "../../types";

function Header({
  mode = "sticky",
  color = "brand",
  formContent,
}: {
  mode?: "sticky" | "fixed";
  color: "brand" | "white";
  formContent: ContactFormType;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedContentVisible, setIsExpandedContentVisible] = useState(
    false
  );
  const media = useMediaQuery();

  useEffect(() => {
    if (isExpanded) {
      if (media >= mobile || color === "white") {
        setIsExpanded(false);
      }
    }
  }, [isExpanded, media, color]);

  useEffect(() => {
    if (isExpanded) {
      const timeout = setTimeout(() => {
        setIsExpandedContentVisible(true);
      }, 100);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setIsExpandedContentVisible(false);
    }
  }, [isExpanded]);

  return (
    <header
      className={classnames(
        styles.container,
        styles[color],
        isExpanded && styles.expanded
      )}
      style={{ position: mode }}
    >
      <div className={styles.logoContainer}>
        {color === "brand" &&
          (media < mobile ? (
            <>
              <img
                src="images/Logo.svg"
                className={styles.logo}
                onClick={() => {
                  setIsExpanded(!isExpanded);
                }}
                alt=""
              />
              <div className={styles.contactContainer}>
                <ContactForm buttonColor={color} content={formContent} />
              </div>
            </>
          ) : (
            <Link href="/">
              <a>
                <img src="images/Logo.svg" className={styles.logo} alt="" />
              </a>
            </Link>
          ))}
      </div>

      {isExpanded && media < mobile && (
        <div
          className={classnames(
            styles.dropdownLinks,
            isExpandedContentVisible && styles.dropdownLinksVisible
          )}
        >
          <NavLink to="/" label="Home" dropdown />
          <NavLink to="/services" label="Services" dropdown />
          <NavLink to="/portfolio" label="Portfolio" dropdown />
          <NavLink
            to="/about"
            label="About"
            nativeAttribs={{
              className: styles.lastLink,
            }}
            dropdown
          />
        </div>
      )}

      <div className={styles.linksContainer}>
        <NavLink to="/" label="Home" />
        <NavLink to="/services" label="Services" />
        <NavLink to="/portfolio" label="Portfolio" />
        <NavLink
          to="/about"
          label="About"
          nativeAttribs={{
            className: styles.lastLink,
          }}
        />
        <ContactForm buttonColor={color} content={formContent} />
      </div>
    </header>
  );
}

export default Header;

function NavLink({
  to,
  label,
  nativeAttribs,
  dropdown,
}: {
  to: string;
  label: string;
  nativeAttribs?: HTMLAttributes<HTMLAnchorElement>;
  dropdown?: boolean;
}) {
  return (
    <div className={classnames(dropdown && styles.dropdownLink)}>
      <Link href={to}>
        <a
          {...nativeAttribs}
          className={classnames(
            styles.navLink,

            nativeAttribs?.className
          )}
        >
          {label}
        </a>
      </Link>
    </div>
  );
}
