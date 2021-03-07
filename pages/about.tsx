import React, { useMemo } from "react";
import * as Page from "../components/Page/Page";
import Head from "next/head";
import styles from "./about.module.scss";
import TeamCard from "../components/TeamCard/TeamCard";
import useMediaQuery, { tablet } from "../hooks/useMediaQuery";
import Axios from "axios";
import { baseUrl } from "../utils/contants";
import parser from "html-react-parser";
import { Schema } from "../types";

function About(props: Schema) {
  const about = props.about;
  const media = useMediaQuery();

  const page = useMemo(
    () => props.pages.find((_page) => _page.slug === "home"),
    [props.pages]
  );

  return (
    <Page.Wrapper form={props.contactForm}>
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
      <Page.Content>
        <div className={styles.container}>
          <div className={styles.content}>
            <small>{about.content.subtitle}</small>
            <h1>{about.content.title}</h1>
            <p>{about.content.sections[0].text}</p>
            {media < tablet && (
              <TeamCard
                pfpImageUrl={about.cards[0].profileImage.url}
                name={about.cards[0].name}
                role={about.cards[0].role}
                description={about.cards[0].description}
                imageUrl={about.cards[0].image.url}
              />
            )}
            {media >= tablet && (
              <>
                <p>{about.content.sections[1].text}</p>
                <p className={styles.emphasis}>
                  {parser(about.quotes[0].description)}
                </p>
              </>
            )}
            <p className={styles.emphasis}>
              {parser(about.quotes[1].description)}
            </p>
          </div>
          <div className={styles.cards}>
            {media >= tablet && (
              <TeamCard
                pfpImageUrl={about.cards[0].profileImage.url}
                name={about.cards[0].name}
                role={about.cards[0].role}
                description={about.cards[0].description}
                imageUrl={about.cards[0].image.url}
              />
            )}
            {media < tablet && <p>{about.content.sections[1].text}</p>}
            <TeamCard
              pfpImageUrl={about.cards[1].profileImage.url}
              name={about.cards[1].name}
              role={about.cards[1].role}
              description={about.cards[1].description}
              imageUrl={about.cards[1].image.url}
            />
            {media < tablet && (
              <p className={styles.emphasis}>
                {parser(about.quotes[0].description)}
              </p>
            )}
          </div>
        </div>
      </Page.Content>
    </Page.Wrapper>
  );
}

export async function getStaticProps() {
  const res = await Axios.get<Schema>(`${baseUrl}/hopkins-marketing`);
  return {
    props: res.data,
  };
}

export default About;
