import Head from 'next/head'
import Benefits from '../components/Benefits'
import UpcomingEvents from '../components/UpcomingEvents'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
      </Head>

      <Benefits></Benefits>
      <UpcomingEvents></UpcomingEvents>
    </div>
  )
}
