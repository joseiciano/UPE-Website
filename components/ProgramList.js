import styles from "../styles/Programs.module.css";
import styled from "styled-components";

const Button = styled.button``;

const Program = ({ image, textbody, btnstyle, hrefpath }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <img className={styles.code} src={image} />
        <div className={styles.container}>
          <h4 className={styles.codeInfo}>{textbody}</h4>

          <a href={hrefpath}>
            <Button className={btnstyle}>Learn More</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProgramList = () => {
  return (
    <div className={styles.wraps}>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>

      {/*UPE Code Section*/}
      <Program
        image="images/Code-1030x215.png"
        textbody="Learn software development through interactive coding workshops"
        hrefpath="code"
        btnstyle={styles.codeButton}
      />
      {/*UPE Make Section*/}
      <Program
        image="images/Make-1030x215.png"
        textbody="Explore hardware development through hands-on workshops"
        hrefpath="make"
        btnstyle={styles.makeButton}
      />

      {/*UPE InfoTech Section*/}
      <Program
        image="images/InfoTech-1030x215.png"
        textbody="Dive into networking, linux, cloud computing, cyber security and more!"
        hrefpath="infotech"
        btnstyle={styles.infoButton}
      />

      {/*UPE Advance Section*/}
      <Program
        image="images/Advance-1030x215.png"
        textbody="Prepare for a career in technology through professional development"
        hrefpath="infotech"
        btnstyle={styles.advanceButton}
      />

      {/*UPE Google CS First Section*/}
      <Program
        image="images/Google-CS-First-1030x215.png"
        textbody="Educate the community about technology through outreach activities"
        hrefpath="googlecsfirst"
        btnstyle={styles.googlecsButton}
      />

      {/*UPE SparkDev Section*/}
      <Program
        image="images/SparkDev-1030x215.png"
        textbody="Develop innovative team projects in different fields of technology"
        hrefpath="sparkdev"
        btnstyle={styles.sparkdevButton}
      />

      {/*UPE MentorFIU Section*/}
      <Program
        image="images/MentorFIU-1030x216.png"
        textbody="Receive guidance from experienced students in technology majors"
        hrefpath="mentor"
        btnstyle={styles.mentorButton}
      />

      {/*UPE Hackers Section*/}
      <Program
        image="images/Hackers-1030x216.png"
        textbody="Participate in hackathons across the state and show off your skills"
        hrefpath="shellhacks"
        btnstyle={styles.hackersButton}
      />

      {/*UPE Discover Section*/}
      <Program
        image="images/New_Logos_Wordmarks_Discover-1030x215.png"
        textbody="Engage in active research led by students across different fields"
        hrefpath="discover"
        btnstyle={styles.discoverButton}
      />
    </div>
  );
};

export default ProgramList;
