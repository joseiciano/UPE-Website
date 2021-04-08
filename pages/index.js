import Head from "next/head";
import Benefits from "../components/Benefits";
import UpcomingEvents from "../components/UpcomingEvents";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import HomepageContainer1 from "../components/HomepageContainer1";
import Footer from "../components/Footer";
import Network from "../components/Network";
import ProgramList from "../components/ProgramList";
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
      <div>
        <h1 className="title">
          {" "}
          <span>Our Programs</span>{" "}
        </h1>
        <style jsx>
          {`
            .title {
              color: #ff9749;
              display: grid;
              text-align: center;
              font-weight: 900;
              font-size: 38px;
            }
          `}
        </style>
        <ProgramList />
      </div>
      <UpcomingEvents ndcolor={"#F7981D"} temp="rgba(255, 151, 0, 0.85)"></UpcomingEvents>
      <Footer />
    </div>
  );
}
