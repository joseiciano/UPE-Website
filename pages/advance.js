import React, { useState } from "react";
import styled,  { css } from "styled-components";
import Image from "next/image";
import UpcomingEvents from "../components/UpcomingEvents";  
import { TiSocialInstagram } from "react-icons/ti";
import {
  RiDiscordLine,
  RiFacebookBoxLine,
  RiMessage2Fill,
} from "react-icons/ri";
import {
  AiOutlineLinkedin,
  AiFillPhone,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Advance = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Nav>
        <Logo src="/Images/UPE_Logo.png" alt="UPE Logo" />
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink href="">Home</MenuLink>
          <MenuLink href="">Calender</MenuLink>
          <MenuLink href="">About us</MenuLink>
          <MenuLink href="">Membership</MenuLink>
          <MenuLink href="">Induction</MenuLink>
        </Menu>
      </Nav>
      <Main>
          <Container1>
              <ImgContainer>
                <Image
                  src="/Images/Image_1.png"
                  alt="Image_1"
                  width={500}
                  height={500}
                  style={{ background: "transparent", margin: "50px 0 0 0" }}/>
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
                      <stop offset="22%" stopColor="rgba(195, 151, 255, 1)" />
                      <stop offset="70%" stopColor="rgba(119, 88, 251, 1)" />
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
      <Footer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "230px", width: "100%" }}>
          <defs>
            <linearGradient id="AdvanceGradient" gradientTransform="rotate(0)">
              <stop offset="22%" stopColor="rgba(195, 151, 255, 1)" />
              <stop offset="77%" stopColor="rgba(119, 88, 251, 1)" />
            </linearGradient>
          </defs>
          <path
            d="M-11.06,31.86 C220.31,355.55 293.68,-240.49 506.99,136.48 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "url('#AdvanceGradient')" }}
          ></path>
        </svg>
        <Container>
          <FooterHeader>Join The Community!</FooterHeader>
          <IconContainer>
            <Icon>
              <RiDiscordLine
                style={{ color: "white", height: "130%", width: "130%" }}
              />
            </Icon>
            <Icon>
              <RiFacebookBoxLine
                style={{ color: "white", height: "130%", width: "130%" }}
              />
            </Icon>
            <Icon>
              <TiSocialInstagram
                style={{ color: "white", height: "130%", width: "130%" }}
              />
            </Icon>
            <Icon>
              <AiFillTwitterSquare
                style={{ color: "white", height: "130%", width: "130%" }}
              />
            </Icon>
            <Icon>
              <AiOutlineLinkedin
                style={{ color: "white", height: "130%", width: "130%" }}
              />
            </Icon>
          </IconContainer>
          <Bottom>
            <FooterHeader Bottom>@Copyright - Uplison Pi Eplison at FIU </FooterHeader>
            <IconContainer>
              <Icon Bottom>
                <RiMessage2Fill color={"white"} size={20} />
              </Icon>
              <Icon Bottom>
                <AiFillPhone color={"white"} size={20} />
              </Icon>
            </IconContainer>
          </Bottom>
        </Container>
      </Footer>
    </div>
  );
};

export default Advance;

// Homepage Section
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
  background: linear-gradient(
    90deg, 
    #C397FF 22%, 
    #7758FB 77%
  );
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

// About Section
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

const MenuLink = styled.a`
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 1.5rem;
  @media (max-width: 1162px) {
    padding: 0.5rem;
  }
`;

// Navigation Section
const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(
    90deg, 
    #C397FF 22%, 
    #7758FB 77%
  );
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1162px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 6px;
    width: 40px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1162px) {
    display: flex;
  }
`;
const Logo = styled.img`
  padding: 1rem 1rem;
`;

// Footer Section
const Container = styled.div`
  background: linear-gradient(
    90deg, 
    #C397FF 22%, 
    #7758FB 70%
  );
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0 0 0;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  width: 90px;
  height: 90px;
  ${(props) =>
    props.Bottom &&
    css`
      width: 50px;
      height: 50px;
    `}
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterHeader = styled.h1`
  color: white;
  font-weight: 900;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: 5px;
  ${(props) =>
    props.Bottom &&
    css`
      font-weight: 100;
      font-size: 13px;
      padding: 1rem 0 1rem 1.5rem;
    `}
`;