import * as Page from "../components/Page/Page";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiGlobe, FiPlay } from "react-icons/fi";
import React, { useEffect, useMemo, useState } from "react";
import { Schema, StrapiImage } from "../types";

import Axios from "axios";
import Head from "next/head";
import Image from "../components/Image/Image";
import Modal from "../components/Modal/Modal";
import { baseUrl } from "../utils/contants";
import styles from "./portfolio.module.scss";
import { useRouter } from "next/router";

function Portfolio(props: Schema) {
  const router = useRouter();
  const [activeVideoUrl, setActiveVideoUrl] = useState("");
  const [activeWebUrl, setActiveWebUrl] = useState("");
  const [activeWebImages, setActiveWebImages] = useState<StrapiImage[]>([]);

  const page = useMemo(
    () => props.pages.find((_page) => _page.slug === "portfolio"),
    [props.pages]
  );

  useEffect(() => {
    if (router.query.portfolio) {
      const el = document.getElementById(`${router.query.portfolio}`);
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

  return (
    <Page.Wrapper headerMode="sticky" form={props.contactForm}>
      <Head>
        <title>{page?.Title || ""}</title>
        <meta
          name="description"
          property="og:description"
          content={page?.Description || ""}
        />
        <meta name="keywords" content={page?.Keywords || ""} />
        <link rel="icon" type="image/svg+xml" href="/images/Logo.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page.Content>
        <div className={styles.container}>
          <div
            className={styles.sectionSlim}
            id={props.portfolio.videographyAnchor}
          >
            <small>
              <span>{props.portfolio.videographySubtitle}</span>
            </small>
            <h1>{props.portfolio.videographyTitle}</h1>
          </div>
          <div className={styles.videoGrid}>
            {props.portfolio.videos.map((_video) => (
              <div
                key={_video.id}
                className={styles.videoItemWrapper}
                onClick={() => {
                  setActiveVideoUrl(_video.video.url);
                }}
              >
                <Image
                  url={_video.thumbnail.url}
                  alt={_video.thumbnail.alternativeText}
                  containerStyles={styles.videoItem}
                />
                <div className={styles.videoItemOverlay}>
                  <FiPlay color="#FFF" />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionSlim} id={props.portfolio.webAnchor}>
            <small>
              <span>{props.portfolio.webSubtitle}</span>
            </small>
            <h1>{props.portfolio.webTitle}</h1>
          </div>
          <div className={styles.webGrid}>
            {props.portfolio.websites.map((_website) => (
              <div
                key={_website.id}
                className={styles.webItem}
                onClick={() => {
                  setActiveWebUrl(_website.url);
                  setActiveWebImages(_website.images);
                }}
              >
                <Image url={_website.thumbnail.url} alt="" />
              </div>
            ))}
          </div>
        </div>
      </Page.Content>
      {activeVideoUrl && (
        <Modal
          isOpen={!!activeVideoUrl}
          setIsOpen={() => {
            setActiveVideoUrl("");
          }}
        >
          <div className={styles.modal}>
            <video controls>
              <source src={`https://${activeVideoUrl}`} type="video/mp4" />
            </video>
          </div>
        </Modal>
      )}
      {activeWebImages.length && (
        <Modal
          isOpen={!!activeWebImages.length}
          setIsOpen={() => {
            setActiveWebUrl("");
            setActiveWebImages([]);
          }}
        >
          <WebModal url={activeWebUrl} images={activeWebImages} />
        </Modal>
      )}
    </Page.Wrapper>
  );
}

export async function getStaticProps() {
  const res = await Axios.get<Schema>(`${baseUrl}/hopkins-marketing`);
  return {
    props: res.data,
  };
}

export default Portfolio;

function WebModal({ url, images }: { url: string; images: StrapiImage[] }) {
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.webModal}>
      <div className={styles.webContentLink}>
        <a href={url} target="_blank">
          <FiGlobe />
        </a>
      </div>
      <div className={styles.modal}>
        <div className={styles.webModalContainer}>
          <Image url={images[index].url} alt={images[index].alternativeText} />
        </div>
      </div>
      <div className={styles.chevronContainer}>
        <div className={styles.chevron}>
          <FaChevronLeft
            size={24}
            className={styles.chevron}
            onClick={() => {
              setIndex(index > 0 ? index - 1 : images.length - 1);
            }}
          />
        </div>
        <div className={styles.chevron}>
          <FaChevronRight
            size={24}
            className={styles.chevron}
            onClick={() => {
              setIndex(index < images.length - 1 ? index + 1 : 0);
            }}
          />
        </div>
      </div>
    </div>
  );
}
