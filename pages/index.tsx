import Head from "next/head";
import * as Page from "../components/Page/Page";
import styles from "./index.module.scss";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import ContentSection from "../components/ContentSection/ContentSection";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import classnames from "classnames";
import Client from "../components/Client/Client";
import useObserver from "../hooks/useObserver";
import Image from "../components/Image/Image";
import { baseUrl } from "../utils/contants";
import Axios from "axios";
import { Schema } from "../types";
import parser from "html-react-parser";
import { IconType } from "react-icons/lib";
import { useMemo } from "react";

const socialsKeyMap: {
  [key in "twitter" | "facebook" | "instagram"]: IconType;
} = {
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
};

function Home(props: Schema) {
  const home = props.home;
  const { isContentVisible } = useObserver("hero");

  const page = useMemo(
    () => props.pages.find((_page) => _page.slug === "home"),
    [props.pages]
  );

  return (
    <Page.Wrapper
      headerMode="fixed"
      headerColor={isContentVisible ? "white" : "brand"}
      form={props.contactForm}
    >
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
      <div className={styles.hero} id="hero">
        <div className={styles.heroContent}>
          <img src="images/Logo.svg" alt="" />
          <div className={styles.title}>
            <span>HOPKINS</span>
            <span>MARKETING</span>
            <span>GROUP</span>
          </div>
        </div>
        <div
          className={styles.chevron}
          onClick={() => {
            window.scrollTo({
              behavior: "smooth",
              top: window.innerHeight - 75,
            });
          }}
        >
          <FaChevronDown size={30} />
        </div>
        <Image
          url={home.heroImage.url}
          alt=""
          containerStyles={styles.heroImage}
        />
      </div>
      <Page.Content>
        <div
          className={classnames(styles.section, styles.sectionExtraPadding)}
          style={{ paddingTop: 0 }}
        >
          <div className={styles.sectionSlim}>
            {}
            <ContentSection
              centered
              heading={<>{parser(home.sections[0].heading)}</>}
              contents={home.sections[0].contents.map(
                (_content) => _content.text
              )}
            />
          </div>
        </div>
        <div className={classnames(styles.section, styles.cardGrid)}>
          {home.services.map((_service) => (
            <ServiceCard
              key={_service.id}
              title={_service.title}
              imageUrl={_service.image.url}
              to={_service.link}
              query={_service.anchor}
              alt={_service.title}
              services={_service.services.map((__service) => __service.text)}
            />
          ))}
        </div>
        <div className={classnames(styles.section, styles.sectionExtraPadding)}>
          <div className={styles.sectionSlim}>
            <ContentSection
              centered
              heading={<>{parser(home.sections[1].heading)}</>}
              contents={home.sections[1].contents.map(
                (_content) => _content.text
              )}
            />
          </div>
        </div>
        {home.clients.map((_client) => (
          <div key={_client.id} className={styles.section}>
            <Client
              name={_client.name}
              url={_client.link}
              imageUrl={_client.image.url}
              alt={_client.name}
              socials={_client.socials
                .filter((_social) => !!socialsKeyMap[_social.type])
                .map((_social) => ({
                  url: _social.link,
                  icon: socialsKeyMap[_social.type],
                }))}
              tags={_client.tags.map((_tag) => _tag.text)}
              description={_client.description}
            />
          </div>
        ))}
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

export default Home;
