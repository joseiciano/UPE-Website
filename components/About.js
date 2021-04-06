import React, { Component } from "react";
import styled from "styled-components";
import Image from 'next/image';

const Header = styled.h1`
 text-align: center;
 color: #F7981D;
 font-weight: 900;
 font-size: 34px;
 font-family: ‘Poppins’, sans-serif;
`;

const Text = styled.p`
 margin-left:0.7rem;
 font-size: 20px;
 font-family: ‘Poppins’, sans-serif;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    @media only screen and (max-width: 900px) {
        display: grid;
        grid-template-columns: auto;
    }
    @media only screen and (max-width: 550px) {
        .image {
            width: 100%;
            height: auto;
        }
    }
`;

const RightGrid = styled.div`
    margin-left: 50px;
    padding: 0 20px;
    justify-content: center;
    @media only screen and (max-width: 550px) {
        margin-left: 5px;
    }
`;

const LeftGrid = styled.div`
`;

const Button = styled.button` 
    cursor: pointer;
    border: none;
    color: white;
    margin-left: 140px;
    margin-top: 27px;
    padding: 12px 70px;
    text-align: center;
    font-weight: 900;
    font-size: 16px;
    font-family: ‘Poppins’, sans-serif;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: linear-gradient(90deg, rgba(253,207,12,1) 0%, rgba(248,155,33,1) 100%);
`;

export default class About extends Component {
  render() {
    return (
    <Grid>
      <LeftGrid>
        <Header>About Us</Header>
        <Text>Upsilon Pi Epsilon (UPE) is the largest student organization for technology at Florida International University (FIU). Our mission is to provide students with the opportunities to develop technically and professionally. We welcome students of all academic backgrounds and skill levels who are interested in technology. By joining the organization, students can participate in our programs, enjoy many benefits, and become part of the tech community at FIU!</Text>
        <Text>UPE is supported by FIU's College of Engineering & Computing and is sponsored by top companies from all industries. Our organization has been recognized both locally and nationally, named "Outstanding Engineering Organization" by FIU and "Outstanding Chapter" by the UPE National Council.</Text>
        <Button>Network</Button><Button>Gallery</Button>
      </LeftGrid>
      <RightGrid>
        <Image src="/About_1_3-2048x2048.png" width="500" height="500" />
      </RightGrid>
        
        
        
    </Grid>
    );
  }
}
