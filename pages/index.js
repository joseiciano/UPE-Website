import Head from "next/head";
import Benefits from "../components/Benefits";
import UpcomingEvents from "../components/UpcomingEvents";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import HomepageContainer1 from "../components/HomepageContainer1";
import Advance from "./advance";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
      </Head>

      <Nav stcolor={"rgba(254, 254, 0)"} ndcolor={"rgba(255, 151, 0)"} />
      <HomepageContainer1 />

      <Benefits></Benefits>
      <UpcomingEvents ndcolor={"#F7981D"} temp="rgba(255, 151, 0, 0.85)"></UpcomingEvents>
      
      <Advance></Advance>
    </div>
  );
}
