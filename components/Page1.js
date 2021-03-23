import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
const page1 = () => {
  return (
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
          <Header>Join Mmiami's leading tech student community</Header>
          <Text>
            Providing students of all academic backgrounds and skill levels with
            opportunities to develope technecally and professionally
          </Text>
          <ButtonContainer>
            <Button>Events</Button>
            <Button>Discord</Button>
          </ButtonContainer>
        </TextContainer>
      </Container1>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "200px", width: "100%" }}
      >
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(0)">
            <stop offset="2%" stop-color="rgba(254, 254, 0)" />
            <stop offset="92%" stop-color=" rgba(255, 151, 0)" />
          </linearGradient>
        </defs>
        <path
          d="M0.00,49.99 C276.75,335.81 264.33,-252.32 533.52,193.71 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: "none", fill: "url('#myGradient')" }}
        ></path>
      </svg>
      <Container2>
        <TextContainer>
          <Header primary>About Us</Header>

          <Text primary>
            Upsilon Pi Epsilon (UPE) is the largest student organization for
            technology at florida international University (FIU). Our mission is
            to provide students of all academic backgrounds and skill levels who
            are interested in technology. By joining the organisation, students
            can participate in our program, enjoy many benifits, and become part
            of the tech community at FIU!
          </Text>

          <Text primary>
            UPE is supported by FIU's college of engineering & Computing and is
            sponsored by top companies from all industries. Our organisation has
            been recognized both locally and nationally, named "Outstanding
            Engineering organization" by FIU and "Outstanding Chapter" by the
            UPE National Concil.
          </Text>

          <ButtonContainer>
            <Button primary>Network</Button> <Button primary>Gallery</Button>
          </ButtonContainer>
        </TextContainer>
        <ImgContainer>
          <Image
            src="/Images/White_1-05.png"
            alt="Picture of the author"
            width={384}
            height={384}
            padding={90}
          />
        </ImgContainer>
      </Container2>
    </Main>
  );
};

export default page1;

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
  background: rgb(255, 215, 0);
  background: linear-gradient(90deg, rgba(254, 254, 0), rgba(255, 151, 0));
  align-item: baseline;
  padding: 50px 0px 60px 0;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap-reverse;
  justify-content: space-around;
  background: white;
  padding: 135px 0px 180px 0;
  @media (max-width: 917px) {
    flex-wrap: reverse-wrap;
  }
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
  text-aling: center;
  text-transform: none;
  text-align: center;
  ${(props) =>
    props.primary &&
    css`
      color: rgb(255, 151, 0);
      margin: 2rem 0 0 0;
    `}
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
  color: rgb(255, 151, 0);
  font-weight: 900;
  font-size: 26px;
  background: white;
  padding: 10px 37px 10px 37px;
  text-decoration: none;
  border: none;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: rgb(255, 215, 0);
      background: linear-gradient(90deg, rgba(254, 254, 0), rgba(255, 151, 0));
    `}
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

  ${(props) =>
    props.primary &&
    css`
      color: black;
      margin: 10px 0 0 0;
      text-align: justify;
      font-size: 16px;
    `}
`;
