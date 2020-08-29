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

export default function Home() {
  const { isContentVisible } = useObserver("hero");

  return (
    <Page.Wrapper
      headerMode="fixed"
      headerColor={isContentVisible ? "white" : "brand"}
    >
      <Head>
        <title>Create Next App</title>
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
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
              }
              author="by Name Surname"
            />
          </div>
        </div>
        <div className={classnames(styles.section, styles.cardGrid)}>
          <ServiceCard
            title="SOCIAL MEDIA"
            background="images/sara-kurfess-6lcT2kRPvnI-unsplash.jpg"
            path="/services/media"
            services={["Social Media", "Multi Media", "Branding"]}
          />
          <ServiceCard
            title="PHOTOGRAPHY"
            background="images/william-bayreuther-hfk6xOjQlFk-unsplash.jpg"
            path="/services/photography"
            services={["Weddings", "Graduations"]}
          />
          <ServiceCard
            title="VIDEOGRAPHY"
            background="images/wahid-khene-iKdQCIiSMlQ-unsplash.jpg"
            path="/services/videography"
            services={["Live Events", "Music Videos", "Filming and Editing"]}
          />
          <ServiceCard
            title="WEB DESIGN"
            background="images/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
            path="/services/web"
            services={["Websites", "Server Hosting", "SEO"]}
          />
        </div>

        <div className={classnames(styles.section, styles.sectionExtraPadding)}>
          <div style={{ width: "75%" }}>
            <ContentSection
              centered
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
          </div>
        </div>

        <div className={styles.section}>
          <Client
            name="Plot Collective"
            url="www.plotco.co.nz"
            image="images/inigo-de-la-maza-s285sDw5Ikc-unsplash.jpg"
            socials={[
              { url: "", icon: FaInstagram },
              { url: "", icon: FaTwitter },
              { url: "", icon: FaFacebookF },
              { url: "", icon: FaGlobeAsia },
            ]}
            tags={["web", "brand", "media"]}
            description="Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ropeior architecto beatae vitae dicta sunt explicabo."
          />
        </div>
        <div className={styles.section}>
          <Client
            name="Ginger and Honey"
            url="www.gingerandhoney.co.nz"
            image="images/beatriz-perez-moya-M2T1j-6Fn8w-unsplash.jpg"
            socials={[
              { url: "", icon: FaInstagram },
              { url: "", icon: FaTwitter },
              { url: "", icon: FaFacebookF },
              { url: "", icon: FaGlobeAsia },
            ]}
            tags={["web", "brand", "media"]}
            description="Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ropeior architecto beatae vitae dicta sunt explicabo."
          />
        </div>
      </Page.Content>
    </Page.Wrapper>
  );
}
