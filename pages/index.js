import Head from 'next/head'
import Nav from '../components/Nav'
import Page1 from '../components/Page1'

export default function Home() {
  return (
    <div style={{padding:'0px', margin: '0px'}}>
    <Nav />
    <Page1/>
    </div>
  )
}
