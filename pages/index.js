import Head from "next/head";
import Benefits from "../components/Benefits";
import UpcomingEvents from "../components/UpcomingEvents";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import HomepageContainer1 from "../components/HomepageContainer1";
import Footer from "../components/Footer";
import Network from "../components/Network";
import Sponsers from "../components/Sponsers";

import About from "../components/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Upsilon Pi Epsilon</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
      </Head>

      <Nav />
      <HomepageContainer1 />
      <div>
        <About />
      </div>
      <Benefits></Benefits>
      <UpcomingEvents ndcolor={"#F7981D"} temp="rgba(255, 151, 0, 0.85)"></UpcomingEvents>
      <Sponsers/>
      <Footer />
    </div>
  );
}
