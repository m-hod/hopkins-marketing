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
import {
  Client as ClientType,
  HomeSection,
  ShortService,
  StrapiImage,
} from "../types";
import parser from "html-react-parser";
import { IconType } from "react-icons/lib";

type Props = {
  heroImage: StrapiImage;
  clients: ClientType[];
  sections: HomeSection[];
  services: ShortService[];
};

const socialsKeyMap: {
  [key in "twitter" | "facebook" | "instagram"]: IconType;
} = {
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
};

function Home(props: Props) {
  const { isContentVisible } = useObserver("hero");

  return (
    <Page.Wrapper
      headerMode="fixed"
      headerColor={isContentVisible ? "white" : "brand"}
    >
      <Head>
        <title>Hopkins Marketing Group</title>
        <meta
          name="description"
          property="og:description"
          content="Hopkins Marketing Group is a digital marketing solutions company based out of Hamilton, New Zealand. We work closely with our clients to bring their business to a wider audience, including branding, media management, multimedia services, and web design."
        />
        <meta
          name="keywords"
          content="hopkins, marketing, nz, new zealand, digital, digital marketing, marketing services, hamilton, local, media, branding, social media, photography, videography, web design"
        />
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
          url={props.heroImage.url}
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
              heading={<>{parser(props.sections[0].heading)}</>}
              contents={props.sections[0].contents.map(
                (_content) => _content.text
              )}
            />
          </div>
        </div>
        <div className={classnames(styles.section, styles.cardGrid)}>
          {props.services.map((_service) => (
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
              heading={<>{parser(props.sections[1].heading)}</>}
              contents={props.sections[1].contents.map(
                (_content) => _content.text
              )}
            />
          </div>
        </div>
        {props.clients.map((_client) => (
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
  const res = await Axios.get(`${baseUrl}/hopkins-marketing-group-home`);
  return {
    props: res.data,
  };
}

export default Home;
