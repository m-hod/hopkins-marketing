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
        <meta
          name="description"
          content="Hopkins Marketing Group is a marketing solutions company based out of Hamilton, New Zealand. We work closely with our clients to bring their business to a wider audience, including branding, media management, multimedia services, and web design."
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
                  Bring your ideas to <span>life</span>, to <span>people</span>,
                  and to <span>New Zealand</span>.
                </>
              }
              contents={[
                "We operate out of Hamilton New Zealand and work with local Kiwi clients to build unique brands that stand out in their community and New Zealand wide. Harnessing the power of modern technologies means your ideas and artistries are catapulted into the public sphere, expanding your targeted audiences and establishing a greater public presence for your business on a national scale.",
                "Whether you’re starting your business from scratch or looking to take things to the next level, we’re here to help. From building brands to networking with clients to developing a public presence, we’ve got you covered for all your marketing needs.",
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
                  Local business doesn't mean local <span>ideas</span>.
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
