import React from "react";
import styles from "./Footer.module.scss";
import { FaArrowUp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Button from "../Button/Button";
import ContactForm from "../ContactForm/ContactForm";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.grid}>
        <FooterItem
          title="CONTACT US"
          content={
            <>
              <p>+64 027 123 9878</p>
              <p>hopkinsmarketing@gmail.com</p>
              <div style={{ marginTop: 12 }}>
                <ContactForm buttonColor="white" />
              </div>
            </>
          }
        />
        <FooterItem
          title="SERVICES"
          content={
            <>
              <LinkItem to="/services/media" label="Social Media" />
              <LinkItem to="/services/photography" label="Photography" />
              <LinkItem to="/services/videography" label="Videography" />
              <LinkItem to="/web" label="Web Design" />
            </>
          }
        />
        <div />
        <div className={styles.socials}>
          <div className={styles.socialsLinks}>
            <LinkItem to="" icon={<FaInstagram />} />
            <LinkItem to="" icon={<FaTwitter />} />
            <LinkItem to="" icon={<FaFacebookF />} />
          </div>
          <small>© Hopkins Marketing 2020</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function LinkItem({
  to,
  label,
  icon,
  external,
}: {
  to: string;
  label?: string;
  icon?: JSX.Element;
  external?: boolean;
}) {
  const externalProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Link href={to}>
      <a {...externalProps} className={styles.link}>
        {icon} {label}
      </a>
    </Link>
  );
}

function FooterItem({
  title,
  content,
}: {
  title: string;
  content: JSX.Element;
}) {
  return (
    <div className={styles.footerItem}>
      <p className={styles.footerItemTitle}>{title}</p>
      <div className={styles.footerItemContent}>{content}</div>
    </div>
  );
}
