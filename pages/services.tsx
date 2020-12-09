import React, { useState, useEffect, useLayoutEffect } from "react";
import * as Page from "../components/Page/Page";
import { useRouter } from "next/router";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import Head from "next/head";
import { detect } from "detect-browser";
import Axios from "axios";
import { baseUrl } from "../contants";
import { Service } from "../types";
import useMediaQuery, { tablet } from "../hooks/useMediaQuery";

function services({ sections }: { sections: Service[] }) {
  const media = useMediaQuery();
  const router = useRouter();
  const browser = detect();
  const browserExceptions = browser.name === "chrome";

  useEffect(() => {
    if (router.query.service) {
      const el = document.getElementById(`${router.query.service}`);
      if (el) {
        const timeout = setTimeout(() => {
          window.scrollTo({ top: el.offsetTop - 75, behavior: "smooth" });
        }, 250);
        return () => {
          clearTimeout(timeout);
        };
      }
    }
  }, [router]);

  const serviceName = router.query.service
    ? //@ts-ignore
      router.query.service.charAt(0).toUpperCase() +
      router.query.service.slice(1)
    : undefined;

  return (
    <Page.Wrapper headerMode="sticky">
      <Head>
        <title>
          Services - {serviceName ? `${serviceName} -` : undefined} Hopkins
          Marketing Group
        </title>
        <meta
          name="description"
          property="og:description"
          content="Hopkins Marketing Group marketing services include branding, social media management, photography for weddings and graduations, videography for live events, music videos, and general filming and editing services, and web design services for static websites, server hosting, and SEO (search engine optimisation)."
        />
        <meta
          name="keywords"
          content="hopkins, marketing, nz, new zealand, digital marketing, marketing services, hamilton, local, media, branding, social media, photography, videography, web design"
        />
        <link rel="icon" type="image/svg+xml" href="/images/Logo.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {sections.map((section, i) => (
        <ServiceSection
          key={section.id}
          browserExceptions={browserExceptions}
          id={section.anchor}
          title={section.title}
          imageUrl={section.image.url}
          alt={section.title}
          orientation={(() => {
            if (media <= tablet) return "left";
            return i % 2 === 0 ? "right" : "left";
          })()}
          content={section.content}
        />
      ))}
    </Page.Wrapper>
  );
}

export async function getStaticProps() {
  const res = await Axios.get(`${baseUrl}/hopkins-marketing-group-services`);
  return {
    props: res.data,
  };
}

export default services;
