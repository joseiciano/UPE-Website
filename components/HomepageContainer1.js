import React from "react";
import styled from "styled-components";
import Image from "next/image";
const HomepageContainer1 = () => {
  return (
    <Main>
      <Container1>
        <ImgContainer>
          <img
            className="image"
            src="/Images/Image_1.png"
            width="500"
            height="500"
            style={{ background: "transparent", margin: "50px 0 0 0" }}
          ></img>
          {/* <Image
            src="/Images/Image_1.png"
            alt="Image_1"
            width={500}
            height={500}
            style={{ background: "transparent", margin: "50px 0 0 0" }}
          /> */}
        </ImgContainer>
        <TextContainer>
          <Header>Join Miami's leading tech student community</Header>
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
            <stop offset="22%" stopColor="rgba(255,215,0,1)" />
            <stop offset="44%" stopColor=" rgba(255,187,0,1)" />
            <stop offset="70%" stopColor=" rgba(255,165,0,1)" />
          </linearGradient>
        </defs>
        <path
          d="M0.00,49.99 C276.75,335.81 264.33,-252.32 533.52,193.71 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: "none", fill: "url('#myGradient')" }}
        ></path>
      </svg>
    </Main>
  );
};

export default HomepageContainer1;

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
  background: linear-gradient(
    90deg,
    rgba(255, 215, 0, 1) 22%,
    rgba(255, 187, 0, 1) 48%,
    rgba(255, 165, 0, 1) 77%
  );
  align-item: baseline;
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
  color: rgb(255, 151, 0);
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
