import React, { Component } from "react";
import styled from "styled-components";
import Image from 'next/image';

const Header = styled.h1`
 margin-left:12.7rem;
 color:#e2a43d;
`;
const Text = styled.p`
 margin-left:0.7rem;
 max-width:50%;
`;
export default class Name extends Component {
  render() {
    return (
    <div>
        <Image src="/About_1_3-2048x2048.png" width="500" height="500" />
        <Header>About Us</Header>
        <Text>Upsilon Pi Epsilon (UPE) is the largest student organization for technology at Florida International University (FIU). Our mission is to provide students with the opportunities to develop technically and professionally. We welcome students of all academic backgrounds and skill levels who are interested in technology. By joining the organization, students can participate in our programs, enjoy many benefits, and become part of the tech community at FIU!</Text>
        <Text>UPE is supported by FIU's College of Engineering & Computing and is sponsored by top companies from all industries. Our organization has been recognized both locally and nationally, named "Outstanding Engineering Organization" by FIU and "Outstanding Chapter" by the UPE National Council.</Text>
        <button>Network</button><button>Gallery</button>
    </div>
    );
  }
}
