import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Header } from "@/components/Header/Header";
import { Wrapper } from "../components/Wrapper";
import { MainArticules } from "@/components/MainArticules/MainArticules";
import Carousel from "@/components/MainArticules/Carousel/Carousel";
import { MatchCenter } from "@/components/MatchCenter/MatchCenter";
import { Articules } from "@/components/Articules/Articules";
import { Shop } from "@/components/Shop/Shop";
import { MobileApp } from "@/components/MobileApp/MobileApp";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>AC Milan forum</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Wrapper>
        <main className={styles.main}>
          {/* <MainArticules /> */}
          <Carousel />
          <MatchCenter />
          <Articules />
          <Shop />
          <MobileApp
            button="DISCOVER MORE"
            paragraph="Download AC Milan official App to immerse yourself fully in the
          Rossoneri world"
            title="AC MILAN OFFICIAL APP"
            img="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/8ae34c18-10fa-49af-9e6d-ff20dbcffe57/Banda-HP-App-Ott2022.png?w=1280&auto=format"
          />
          <MobileApp
            button="Find out more"
            paragraph="Milan Academy is the set of projects dedicated to the involvement of an U18 target audience in sporting activities
            "
            title="MILAN ACADEMY"
            img="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/645ba793-db62-4094-a2c8-eb9a27a60f25/Banda-HP-Academy-Nov2020.png?w=1280&auto=format"
          />
        </main>
      </Wrapper>

      <Footer />
    </>
  );
}
