import styled, { css } from "styled-components";
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
const Footer = () => {
  return (
    <Main>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "230px", width: "100%" }}
      >
        <defs>
          <linearGradient id="Gradient" gradientTransform="rotate(0)">
            <stop offset="22%" stopColor="rgba(255,215,0,1)" />
            <stop offset="48%" stopColor=" rgba(255,187,0,1)" />
            <stop offset="77%" stopColor=" rgba(255,165,0,1)" />
          </linearGradient>
        </defs>
        <path
          d="M-11.06,31.86 C220.31,355.55 293.68,-240.49 506.99,136.48 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "url('#Gradient')" }}
        ></path>
      </svg>
      <Container>
        <Header>Join The Community!</Header>
        <IconContainer>
          <a href="https://discord.com/invite/upefiu">
            <Icon>
              <RiDiscordLine
                style={{ color: "white", height: "130%", width: "130%" }}
              />
            </Icon>
          </a>
          <a href="">
            <Icon>
              <RiFacebookBoxLine
                style={{ color: "white", height: "130%", width: "130%" }}
              />
            </Icon>
          </a>

          <a href="https://www.instagram.com/upefiu/?hl=en">
            <Icon>
              <TiSocialInstagram
                style={{ color: "white", height: "130%", width: "130%" }}
              />
            </Icon>
          </a>

          <a href="">
            <Icon>
              <AiFillTwitterSquare
                style={{ color: "white", height: "130%", width: "130%" }}
              />
            </Icon>
          </a>

          <a href="https://www.linkedin.com/company/upe-fiu/">
            <Icon>
              <AiOutlineLinkedin
                style={{ color: "white", height: "130%", width: "130%" }}
              />
            </Icon>
          </a>
        </IconContainer>
        <Bottom>
          <Header Bottom>@Copyright - Uplison Pi Eplison at FIU </Header>
          <Credits>
            Made by SparkDev 2021: Ngang Bah, Ha Ho, Freeman Francois, Taylor
            Gross, Ziad Malik{" "}
          </Credits>
          <IconContainer>
            <a href="">
              <Icon Bottom>
                <RiMessage2Fill color={"white"} size={20} />
              </Icon>
            </a>
            <a href="">
              <Icon Bottom>
                <AiFillPhone color={"white"} size={20} />
              </Icon>
            </a>
          </IconContainer>
        </Bottom>
      </Container>
    </Main>
  );
};

export default Footer;

const Container = styled.div`
  background: rgb(255, 215, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 215, 0, 1) 22%,
    rgba(255, 187, 0, 1) 48%,
    rgba(255, 165, 0, 1) 77%
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
  align-items: center;
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
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.h2`
  color: white;
  font-weight: 900;
  font-size: 32px;
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
const Credits = styled.p`
  font-weight: 100;
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  color: white;
  text-align: center;
`;
