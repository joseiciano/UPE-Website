import { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Image src="/Images/UPE_Logo.png" alt="UPE Logo" />
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
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 1.5rem;
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(90deg, rgba(254, 254, 0), rgba(255, 151, 0));
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
  @media (max-width: 1196px) {
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
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1196px) {
    display: flex;
  }
`;
const Image = styled.img`
  padding: 1rem 1rem;
`;
