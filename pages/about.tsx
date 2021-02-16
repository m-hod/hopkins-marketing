import React from "react";
import * as Page from "../components/Page/Page";
import Head from "next/head";
import styles from "./about.module.scss";
import TeamCard from "../components/TeamCard/TeamCard";
import useMediaQuery, { tablet } from "../hooks/useMediaQuery";
import Axios from "axios";
import { baseUrl } from "../utils/contants";
import { AboutCard, AboutContent, AboutQuote } from "../types";
import parser from "html-react-parser";

function About({
  cards,
  quotes,
  content,
}: {
  cards: AboutCard[];
  quotes: AboutQuote[];
  content: AboutContent;
}) {
  const media = useMediaQuery();

  return (
    <Page.Wrapper>
      <Head>
        <title>About - Hopkins Marketing Group</title>
        <meta
          name="description"
          property="og:description"
          content="Hopkins Marketing Group was built from the ground up by CEO Elliot Hopkins. Through his personal experience in the process he offers a unique perspective on marketing and building brands for businesses to help bring them to the wider public."
        />
        <meta
          name="keywords"
          content="hopkins, marketing, nz, new zealand, digital marketing, marketing services, hamilton, local, media, branding, social media, photography, videography, web design"
        />
        <link rel="icon" type="image/svg+xml" href="/images/Logo.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page.Content>
        <div className={styles.container}>
          <div className={styles.content}>
            <small>{content.subtitle}</small>
            <h1>{content.title}</h1>
            <p>{content.sections[0].text}</p>
            {media < tablet && (
              <TeamCard
                pfpImageUrl={cards[0].profileImage.url}
                name={cards[0].name}
                role={cards[0].role}
                description={cards[0].description}
                imageUrl={cards[0].image.url}
              />
            )}
            {media >= tablet && (
              <>
                <p>{content.sections[1].text}</p>
                <p className={styles.emphasis}>
                  {parser(quotes[0].description)}
                </p>
              </>
            )}
            <p className={styles.emphasis}>{parser(quotes[1].description)}</p>
          </div>
          <div className={styles.cards}>
            {media >= tablet && (
              <TeamCard
                pfpImageUrl={cards[0].profileImage.url}
                name={cards[0].name}
                role={cards[0].role}
                description={cards[0].description}
                imageUrl={cards[0].image.url}
              />
            )}
            {media < tablet && <p>{content.sections[1].text}</p>}
            <TeamCard
              pfpImageUrl={cards[1].profileImage.url}
              name={cards[1].name}
              role={cards[1].role}
              description={cards[1].description}
              imageUrl={cards[1].image.url}
            />
            {media < tablet && (
              <p className={styles.emphasis}>{parser(quotes[0].description)}</p>
            )}
          </div>
        </div>
      </Page.Content>
    </Page.Wrapper>
  );
}

export async function getStaticProps() {
  const res = await Axios.get(`${baseUrl}/hopkins-marketing-group-about`);
  return {
    props: res.data,
  };
}

export default About;
