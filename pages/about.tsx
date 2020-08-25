import React from "react";
import * as Page from "../components/Page/Page";
import Head from "next/head";
import styles from "./about.module.scss";
import TeamCard from "../components/TeamCard/TeamCard";

function About() {
  return (
    <Page.Wrapper>
      <Head>test</Head>
      <Page.Content>
        <div className={styles.container}>
          <div className={styles.content}>
            <small>ABOUT</small>
            <h1>Our journey</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quiepakis nostrud exercitation ullamco
              laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cfgillum dolore
              eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt inpeku culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium poeyi doloremque laudantium, totam rem aperiam, eaque
              ipsa quae apsb illo inventore veritatis et quasi architecto
              beiatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
              quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, seprid quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliqueam
              quaerat voluptatem.
            </p>
            <p className={styles.emphasis}>
              Excepteur sint occaecat <span>cupidatat</span> non proident, sunt
              in culpa qui officia deserunt.
            </p>
            <p className={styles.emphasis}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia <span>deserunt.</span>
            </p>
          </div>
          <div className={styles.cards}>
            <TeamCard
              profilePicture="/images/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg"
              name="Elliot Hopkins"
              role="Founder & CEO"
              description="Natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
              backgroundImage="/images/mediensturmer-aWf7mjwwJJo-unsplash.jpg"
            />
            <TeamCard
              profilePicture="/images/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg"
              name="Elliot Hopkins"
              role="Founder & CEO"
              description="Natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. Natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
              backgroundImage="/images/annie-spratt-QckxruozjRg-unsplash.jpg"
            />
          </div>
        </div>
      </Page.Content>
    </Page.Wrapper>
  );
}

export default About;
