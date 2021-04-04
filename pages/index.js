<<<<<<< HEAD
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import sponsers from '../pages/components/Sponsers'
import Sponsers from '../pages/components/Sponsers'



export default function Home() {
  return (
    <>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
    </head>

    <div className={styles.container}>
      <Sponsers/>
    </div>
   </>
  )
=======
import Head from "next/head";
import Benefits from "../components/Benefits";
import UpcomingEvents from "../components/UpcomingEvents";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import HomepageContainer1 from "../components/HomepageContainer1";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
      </Head>

      <Nav />
      <HomepageContainer1 />

      <Benefits></Benefits>
      <UpcomingEvents></UpcomingEvents>
    </div>
  );
>>>>>>> aad0cfe24aea0cca543d90f3012a27f3e8430c2b
}
