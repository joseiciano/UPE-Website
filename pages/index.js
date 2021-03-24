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
}
