import styled, { css } from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import {
  RiDiscordLine,
  RiFacebookBoxLine,
  RiMessage2Fill,
} from "react-icons/ri";
import { AiOutlineLinkedin, AiFillPhone } from "react-icons/ai";

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
            <stop offset="1%" stopColor="rgba(254, 254, 0)" />
            <stop offset="99%" stopColor=" rgba(255, 151, 0)" />
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
          <Icon>
            <RiDiscordLine color={"white"} size={90} />
          </Icon>
          <Icon>
            <RiFacebookBoxLine color={"white"} size={90} />
          </Icon>
          <Icon>
            {" "}
            <GrInstagram color={"white"} size={90} />
          </Icon>
          <Icon>
            {" "}
            <FaTwitter color={"white"} size={90} />
          </Icon>
          <Icon>
            <AiOutlineLinkedin color={"white"} size={90} />
          </Icon>
        </IconContainer>
        <Bottom>
          <Header Bottom>@Copyright - Uplison Pi Eplison at FIU </Header>
          <IconContainer>
            <Icon>
              <RiMessage2Fill color={"white"} size={20} />
            </Icon>
            <Icon>
              <AiFillPhone color={"white"} size={20} />
            </Icon>
          </IconContainer>
        </Bottom>
      </Container>
    </Main>
  );
};

export default Footer;

const Container = styled.div`
  background: linear-gradient(90deg, rgba(254, 254, 0), rgba(255, 151, 0));
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: transparent;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0 0 0;
`;
const Icon = styled.div`
  padding: 20px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.h1`
  color: white;
  font-weight: 900;
  font-size: 45px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  padding: 40px 0 20px 0;
  margin: 0px;
  ${(props) =>
    props.Bottom &&
    css`
      font-weight: 100;
      font-size: 13px;
      padding: 25px 0 0 0;
    `}
`;
