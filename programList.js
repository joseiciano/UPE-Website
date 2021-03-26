import styles from '../styles/Programs.module.css'
import styled from 'styled-components'


const Button = styled.button``

const ProgramList = () => {
return (
   <div className = {styles.wraps}>

<link rel="preconnect" href="https://fonts.gstatic.com"></link>

       {/*UPE Code Section*/}

       <div className ={styles.wrap}>

<div className = {styles.card}>
    
<img className={styles.code} src = "/Code-1030x215.png"/>
    <div className = {styles.container}>

<link className= {styles.codeInfo} 
href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
        
        <h4 className= {styles.codeInfo}>Learn software development through interactive coding workshops</h4>

<link className = {styles.codeButton} href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet"></link>
        
         <Button className = {styles.codeButton}>Learn More</Button>

   </div>
</div>
</div>

    {/*UPE Make Section*/}

<div className ={styles.wrap}>
<div className = {styles.card}>
<img className={styles.code} src = "/Make-1030x215.png"/>    
<div className = {styles.container}>
        <h4 className= {styles.codeInfo}>Explore hardware development through hands-on workshops</h4>
        <Button className = {styles.makeButton}>Learn More</Button>
    </div>
</div>
</div>

    {/*UPE InfoTech Section*/}

<div className ={styles.wrap}>
<div className = {styles.card}>
<img className={styles.code} src = "/InfoTech-1030x215.png"/>
    <div className = {styles.container}>
        <h4 className= {styles.codeInfo}>Dive into networking, linux, cloud computing, cyber security and more!</h4>
        <Button className = {styles.infoButton}>Learn More</Button>
    </div>
</div>
</div>

    {/*UPE Advance Section*/}

<div className ={styles.wrap}>
<div className = {styles.card}>
<img className={styles.code} src = "/Advance-1030x215.png"/>
    <div className = {styles.container}>
        <h4 className= {styles.codeInfo}>Prepare for a career in technology through professional development</h4>
        <Button className = {styles.advanceButton}>Learn More</Button>
    </div>
</div>
</div>

    {/*UPE Google CS First Section*/}

<div className ={styles.wrap}>
<div className = {styles.card}>
<img className={styles.code} src = "/Google-CS-First-1030x215.png"/>
    <div className = {styles.container}>
        <h4 className= {styles.codeInfo}>Educate the community about technology through outreach activities</h4>
        <Button className = {styles.googlecsButton}>Learn More</Button>
    </div>
</div>
</div>

    {/*UPE SparkDev Section*/}

<div className ={styles.wrap}>
<div className = {styles.card}>
<img className={styles.code} src = "/SparkDev-1030x215.png"/>
    <div className = {styles.container}>
        <h4 className= {styles.codeInfo}>Develop innovative team projects in different fields of technology</h4>
        <Button className = {styles.sparkdevButton}>Learn More</Button>
    </div>
</div>
</div>

    {/*UPE MentorFIU Section*/}

<div className ={styles.wrap}>
<div className = {styles.card}>
<img className={styles.code} src = "/MentorFIU-1030x216.png"/>
    <div className = {styles.container}>
        <h4 className= {styles.codeInfo}>Receive guidance from experienced students in technology majors</h4>
        <Button className = {styles.mentorButton}>Learn More</Button>
    </div>
</div>
</div>

    {/*UPE Hackers Section*/}

<div className ={styles.wrap}>
<div className = {styles.card}>
<img className={styles.code} src = "/Hackers-1030x216.png"/>
    <div className = {styles.container}>
        <h4 className= {styles.codeInfo}>Participate in hackathons across the state and show off your skills</h4>
        <Button className = {styles.hackersButton}>Learn More</Button>
    </div>
</div>
</div>

    {/*UPE Discover Section*/}

<div className ={styles.wrap}>
    <div className = {styles.card}>
    <img className={styles.code} src = "/New_Logos_Wordmarks_Discover-1030x215.png"/>
        <div className = {styles.container}>
        <h4 className= {styles.codeInfo}>Engage in active research led by students across different fields</h4>
    <Button className = {styles.discoverButton}>Learn More</Button>
</div>
</div>
</div>

   </div>
)
}

export default ProgramList