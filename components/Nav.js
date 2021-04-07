import { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <MenuLink href="/">
        <Image src="/Images/UPE_Logo.png" alt="UPE Logo" />
      </MenuLink>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/">Calender</MenuLink>
        <MenuLink href="/">About us</MenuLink>
        <MenuLink href="/">Membership</MenuLink>
        <MenuLink href="/">Induction</MenuLink>
        <MenuLink href="professional_network">Network</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 0 1rem;
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

const Nav = styled.div`
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: rgb(255, 215, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 215, 0, 1) 22%,
    rgba(255, 187, 0, 1) 48%,
    rgba(255, 165, 0, 1) 77%
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
  @media (max-width: 1254px) {
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
  @media (max-width: 1254px) {
    display: flex;
  }
`;
const Image = styled.img`
   padding: 0.5rem 0.5rem;
`;
