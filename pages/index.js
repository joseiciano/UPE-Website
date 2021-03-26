import Head from 'next/head'
import ProgramList from '../components/programlist'
import LayoutStyles from '../styles/layout.module.css'
import Nav from '../components/Nav'
import HomepageContainer1 from '../components/HomepageContainer1'

export default function Home() {
  
  return (
    <div>
    <Nav />
    <HomepageContainer1 />
    //      <h1 className = "title"> <span>Our Programs</span> </h1>
//    <style jsx>
//      {`
//      .title{
//        color: #FF9749;
//       display: grid;
//       text-align: center;
//        font-weight: 900;
//        font-size: 38px; 
//      }`
//      }
//    </style>
//      <ProgramList />
    </div>
    
  )
}

