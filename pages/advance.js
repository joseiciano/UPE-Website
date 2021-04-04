import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Nav from "../components/Nav";
import UpcomingEvents from "../components/UpcomingEvents";

const Advance = () => {
  return (
    <div>
        <Nav stcolor={"#C397FF"} ndcolor={"#7758FB"}/>
        <Main>
            <Container1>
                <ImgContainer>
                <Image
                    src="/Images/White_1-05.png"
                    alt="Picture of the author"
                    width={384}
                    height={384}
                    style={{ background: "transparent", margin: "50px 0 0 0" }}
                />
                </ImgContainer>
                <TextContainer>
                <Header>Code, Eat, Sleep, Repeat!</Header>
                <Text>
                    Providing students of all academic backgrounds and skill levels with
                    opportunities to develope technecally and professionally (need to be updated)
                </Text>
                <ButtonContainer>
                    <Button>Events</Button>
                    <Button>Gallery</Button>
                </ButtonContainer>
                </TextContainer>
            </Container1>
        
            <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                style={{ height: "200px", width: "100%" }}>
                <defs>
                    <linearGradient id="AdvanceGradient" gradientTransform="rotate(0)">
                        <stop offset="2%" stopColor="rgba(195, 151, 255)" />
                        <stop offset="92%" stopColor="rgba(119, 88, 251)" />
                    </linearGradient>
                </defs>
                <path
                d="M0.00,49.99 C276.75,335.81 264.33,-252.32 533.52,193.71 L500.00,0.00 L0.00,0.00 Z"
                style={{ stroke: "none", fill: "url('#AdvanceGradient')" }}/>
            </svg>
        </Main>
        <About>
            <Left>
                <H1>About Advance</H1>
                <AboutText>
                UPE Advance teaches students career development knowledge and skills through interactive workshops and activities. These take place every two weeks for about an hour and are led by the program committee, faculty, or corporate sponsors. Other activities such as the interview prep sessions take place every week, and employer events can happen at any time.
                </AboutText>
            </Left>
            <Right>
                <img className="image" src="benefits.png" width='550' height='550'></img>
            </Right>
        </About>
        <UpcomingEvents ndcolor={"#7758FB"} temp={"rgba(119, 88, 251, 0.85)"} />
    </div>
  );
};

export default Advance;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-around;
  background: linear-gradient(90deg, #C397FF, #7758FB);
  padding: 50px 0px 60px 0;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  height: 500px;
  background: transparent;
  justify-content: center;
`;
const Header = styled.h1`
  color: white;
  font-weight: 900;
  height: "50px";
  font-family: "Poppins", sans-serif;
  text-align: center;
  text-transform: none;
  text-align: center;
`;
const ImgContainer = styled.div`
  width: auto;
  height: auto;
  padding: 20px;
  background: transparent;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
  gap: 40px;
`;
const Button = styled.button`
  border-radius: 60px;
  font-family: ‘Poppins’, sans-serif;
  color: rgba(119, 88, 251);
  font-weight: 900;
  font-size: 26px;
  background: white;
  padding: 10px 37px 10px 37px;
  text-decoration: none;
  border: none;
`;
const Text = styled.p`
  background: transparent;
  margin: 15px 0 10px 0;
  font-family: "Poppins", sans-serif;
  font-weight: thin;
  font-size: 18px;
  text-align: center;
  line-height: 2rem;
  color: white;
  display: block;
  margin: 0 2em 0 2em;
`;

const About = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    @media only screen and (max-width: 900px) {
        display: grid;
        grid-template-columns: auto;
        .image {
            width: 100%;
            height: auto;
        }
    }
`;

const H1 = styled.h1`
    text-align: center;
    color: #7758FB;
    font-weight: 900;
    font-size: 34px;
    font-family: ‘Poppins’, sans-serif;
`;

const AboutText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
`;

const Left = styled.div`
    font-size: 20px;
    font-family: ‘Poppins’, sans-serif;
    margin-left: 50px;
    padding: 0 20px;
    justify-content: center;
    @media only screen and (max-width: 550px) {
        margin-left: 5px;
    }
`;

const Right = styled.div`
    justify-content: center;
`;