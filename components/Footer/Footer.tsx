import { FaArrowUp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import ContactForm from "../ContactForm/ContactForm";
import { ContactForm as ContactFormType } from "../../types";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

function Footer({ formContent }: { formContent: ContactFormType }) {
  return (
    <footer className={styles.container}>
      <div className={styles.grid}>
        <FooterItem
          title="CONTACT US"
          content={
            <>
              <p>+64 027 882 3548</p>
              <LinkItem
                external
                to="mailto:hopkinsmarketinggroup@gmail.com"
                label="hopkinsmarketinggroup@gmail.com"
              />
              <div style={{ marginTop: 12 }}>
                <ContactForm buttonColor="white" content={formContent} />
              </div>
            </>
          }
        />
        <FooterItem
          title="SERVICES"
          content={
            <>
              <LinkItem to="/services" query="media" label="Social Media" />
              <LinkItem
                to="/services"
                query="photography"
                label="Photography"
              />
              <LinkItem
                to="/services"
                query="videography"
                label="Videography"
              />
              <LinkItem to="/services" query="web" label="Web Design" />
            </>
          }
        />
        <div />
        <div className={styles.socials}>
          <div className={styles.socialsLinks}>
            {/* <LinkItem to="" icon={<FaInstagram />} /> */}
            {/* <LinkItem to="" icon={<FaTwitter />} /> */}
            <LinkItem
              external
              to="https://www.facebook.com/HMGNZ"
              icon={<FaFacebookF />}
            />
          </div>
          <div className={styles.credits}>
            <small>© Hopkins Marketing 2020</small>
            <small>Created by Michael Hodges</small>
          </div>
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
  query,
}: {
  to: string;
  query?: string;
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
    <Link href={query ? { pathname: to, query: { service: query } } : to}>
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
