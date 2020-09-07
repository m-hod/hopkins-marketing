import Head from "next/head";
import * as Page from "../components/Page/Page";
import styles from "./index.module.scss";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGlobeAsia,
  FaChevronDown,
} from "react-icons/fa";
import QuoteCard from "../components/QuoteCard/QuoteCard";
import ContentSection from "../components/ContentSection/ContentSection";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import classnames from "classnames";
import Client from "../components/Client/Client";
import useObserver from "../hooks/useObserver";
import Image from "../components/Image/Image";

export default function Home() {
  const { isContentVisible } = useObserver("hero");

  return (
    <Page.Wrapper
      headerMode="fixed"
      headerColor={isContentVisible ? "white" : "brand"}
    >
      <Head>
        <title>Hopkins Marketing Group</title>
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
          webp="/images/hunters-race-MYbhN8KaaEc-unsplash.webp"
          fallback="/images/hunters-race-MYbhN8KaaEc-unsplash.jpg"
          alt=""
          containerStyles={styles.heroImage}
        />
      </div>
      <Page.Content>
        <div
          className={classnames(styles.section, styles.sectionExtraPadding)}
          style={{ paddingTop: 0 }}
        >
          <div className={styles.sectionGrid}>
            <ContentSection
              heading={
                <>
                  Excepteur sint occaecat <span>cupidatat</span> non proident,
                  sunt in culpa qui officia
                </>
              }
              contents={[
                "Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat nulla parieratur. Excepteur sint.",
                "Culpa qui officia deserunt mollit anim id est laborum. Sed ut  perspiciatis unde omnis iste natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ropeior architecto beatae vitae dicta sunt explicabo.",
              ]}
            />
            <QuoteCard
              quote={
                "Clarity, communication, consistency. Your brand is important to you, and being confident that your marketing is in line with your ideas is vital. We understand, and we’re with you 100% of the way."
              }
              author="CEO - Elliot Hopkins"
            />
          </div>
        </div>
        <div className={classnames(styles.section, styles.cardGrid)}>
          <ServiceCard
            title="SOCIAL MEDIA"
            webp="images/sara-kurfess-6lcT2kRPvnI-unsplash.webp"
            fallback="images/sara-kurfess-6lcT2kRPvnI-unsplash.jpg"
            to="/services"
            query="media"
            alt="Social Media"
            services={["Social Media", "Multi Media", "Branding"]}
          />
          <ServiceCard
            title="PHOTOGRAPHY"
            webp="images/william-bayreuther-hfk6xOjQlFk-unsplash.webp"
            fallback="images/william-bayreuther-hfk6xOjQlFk-unsplash.jpg"
            to="/services"
            query="photography"
            alt="Photography"
            services={["Weddings", "Graduations"]}
          />
          <ServiceCard
            title="VIDEOGRAPHY"
            webp="images/wahid-khene-iKdQCIiSMlQ-unsplash.webp"
            fallback="images/wahid-khene-iKdQCIiSMlQ-unsplash.jpg"
            to="/services"
            query="videography"
            alt="Videography"
            services={["Live Events", "Music Videos", "Filming and Editing"]}
          />
          <ServiceCard
            title="WEB DESIGN"
            webp="images/marvin-meyer-SYTO3xs06fU-unsplash.webp"
            fallback="images/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
            to="/services"
            query="web"
            alt="Web Design"
            services={["Websites", "Server Hosting", "SEO"]}
          />
        </div>

        <div className={classnames(styles.section, styles.sectionExtraPadding)}>
          <div className={styles.sectionSlim}>
            <ContentSection
              centered
              heading={
                <>
                  Local kiwi’s. Global ideas. Let’s bring your{" "}
                  <span>business</span> to the world.
                </>
              }
              contents={[
                "We operate out of Hamilton New Zealand and work with local Kiwi clients to build unique brands that won’t just stand out in the local community, but even on the world stage. Harnessing the power of modern technologies means your ideas and artistries are catapulted into the public sphere, expanding your targeted audiences and establishing a greater public presence for your business in New Zealand and around the globe.",
                "With our base of satisfied clients growing day by day, we’re eager to continue providing optimal results for all your marketing needs at an unbeatable budget. Just check out some of our clients below and see the results for yourself!",
              ]}
            />
          </div>
        </div>

        <div className={styles.section}>
          <Client
            name="Plot Collective"
            url="www.plotco.co.nz"
            webp="images/inigo-de-la-maza-s285sDw5Ikc-unsplash.webp"
            fallback="images/inigo-de-la-maza-s285sDw5Ikc-unsplash.jpg"
            alt="PlotCo"
            socials={[
              { url: "", icon: FaInstagram },
              { url: "", icon: FaTwitter },
              { url: "", icon: FaFacebookF },
              { url: "", icon: FaGlobeAsia },
            ]}
            tags={["web", "brand", "media"]}
            description="One of our closest partners, we built the Plotco brand together from the ground up. Building networks of retail clients, expanding into a physical shopfront and cafe, and developing the brand presence both in the local Hamilton community and online, we were and still are with them every step of the way."
          />
        </div>
        <div className={styles.section}>
          <Client
            name="Ginger and Honey"
            url="www.gingerandhoney.co.nz"
            webp="images/beatriz-perez-moya-M2T1j-6Fn8w-unsplash.webp"
            fallback="images/beatriz-perez-moya-M2T1j-6Fn8w-unsplash.jpg"
            alt="Ginger and Honey"
            socials={[
              { url: "", icon: FaInstagram },
              { url: "", icon: FaTwitter },
              { url: "", icon: FaFacebookF },
              { url: "", icon: FaGlobeAsia },
            ]}
            tags={["web", "media"]}
            description="Ginger and Honey was an already established business operating out of the Waikato region and was ready for the next step. We developed their online presence and built engaging community connections that skyrocketed them from local business to operating New Zealand wide."
          />
        </div>
      </Page.Content>
    </Page.Wrapper>
  );
}
