import React, { useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Carousel, { consts } from "react-elastic-carousel";
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
import Event from "../components/Event";

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <FaCaretLeft color={"#d7084f"} size={"4em"} cursor={"pointer"} />
    ) : (
      <FaCaretRight color={"#d7084f"} size={"4em"} cursor={"pointer"} />
    );
  return (
    <Arrow onClick={onClick} disabled={isEdge}>
      {pointer}
    </Arrow>
  );
};

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 650, itemsToShow: 2, pagination: false },
  { width: 1000, itemsToShow: 3, pagination: false },
  { width: 1300, itemsToShow: 4, pagination: false },
  { width: 1600, itemsToShow: 5, pagination: false },
];

const code = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <Nav>
        <Logo
          src="/images/UPE_Logo_Website_White-1-300x77.png"
          alt="UPE Logo"
        />
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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <Container1>
          <ImgContainer>
            <Image
              src="/images/Code_4-1030x1030.png"
              alt="Image_1"
              width={500}
              height={500}
              style={{ background: "transparent", margin: "50px 0 0 0" }}
            />
          </ImgContainer>
          <TextContainer>
            <Header>Code, Eat, Sleep, Repeat!</Header>
            <Text>
              Learn how to program in various different languages through our
              interactive workshops. Build sites using JavaScript, bots using
              Python, all languages are equal here!
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
          style={{ height: "200px", width: "100%" }}
        >
          <defs>
            <linearGradient id="AdvanceGradient" gradientTransform="rotate(0)">
              <stop offset="2%" stopColor="#f66144" />
              <stop offset="92%" stopColor="#d7084f" />
            </linearGradient>
          </defs>
          <path
            d="M0.00,49.99 C276.75,335.81 264.33,-252.32 533.52,193.71 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "url('#AdvanceGradient')" }}
          />
        </svg>
      </Main>
      <About>
        <Left>
          <H1>About Code</H1>
          <AboutText>
            Upsilon Pi Epsilon (UPE) is the largest student organization for
            technology at Florida International University. Our mission os to
            provide students with opportunities to develop technically and
            professionally. We welcome students of all academic backgrounds and
            skill levels who are interested in technology. By joining the
            organization, students can participate in our programs, enjoy many
            benefits, and become part of the tech community at FIU!
          </AboutText>

          <AboutText>
            UPE is supported by FIU's College of Engineering and Computing and
            is sponsered by top companies of all industries. Our organization
            has been recognized both locally and nationally, named "Outstanding
            Engineering Organization" by FIU and "Outstanding Chapter" by the
            UPE National Council.
          </AboutText>
        </Left>
        <Right>
          <img
            className="image"
            src="benefits.png"
            width="550"
            height="550"
          ></img>
        </Right>
      </About>
      <div style={{ width: "100%", padding: "200px" }}>
        <H1>Upcoming Events</H1>
      </div>
      <Footer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "230px", width: "100%" }}
        >
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
            <FooterHeader Bottom>
              @Copyright - Uplison Pi Eplison at FIU{" "}
            </FooterHeader>
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
export default code;

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
  background: linear-gradient(90deg, #f66144, #d7084f);
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
  color: #d7084f;
  font-weight: 900;
  font-size: 26px;
  background: white;
  padding: 10px 37px 10px 37px;
  text-decoration: none;
  border: none;
  cursor: pointer;
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
  color: #d7084f;
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
  background: linear-gradient(90deg, #f66144, #d7084f);
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
  background: linear-gradient(90deg, #f66144 2%, #d7084f 92%);
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
const Arrow = styled.div`
  padding-top: 8vh;
  @media only screen and (max-width: 500px) {
    padding-top: 3vh;
  }
`;
