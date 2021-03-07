import React, { useEffect, useMemo } from "react";
import * as Page from "../components/Page/Page";
import { useRouter } from "next/router";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import Head from "next/head";
import { detect } from "detect-browser";
import Axios from "axios";
import { baseUrl } from "../utils/contants";
import useMediaQuery, { tablet } from "../hooks/useMediaQuery";
import { Schema } from "../types";

function services(props: Schema) {
  const media = useMediaQuery();
  const router = useRouter();
  const browser = detect();
  const browserExceptions = browser.name === "chrome";

  const page = useMemo(
    () => props.pages.find((_page) => _page.slug === "home"),
    [props.pages]
  );

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
    <Page.Wrapper headerMode="sticky" form={props.contactForm}>
      <Head>
        <title>{page?.Title}</title>
        <meta
          name="description"
          property="og:description"
          content={page?.Description}
        />
        <meta name="keywords" content={page?.Keywords} />
        <link rel="icon" type="image/svg+xml" href="/images/Logo.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.services.sections.map((section, i) => (
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
  const res = await Axios.get<Schema>(`${baseUrl}/hopkins-marketing`);
  return {
    props: res.data,
  };
}

export default services;
