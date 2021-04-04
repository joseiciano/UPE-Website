import styled from "styled-components";
import Image from "next/image";
const Network = () => {
  return (
    <Main>
      <Container>
        <Image
          src="/Images/Microsoft.png"
          alt="company logo"
          width={150}
          height={80}
          layout="intrinsic"
          style={{ background: "transparent" }}
        />
        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <Image
          src="/Images/Microsoft.png"
          alt="company logo"
          width={150}
          height={80}
          layout="intrinsic"
        />
        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <Image
          src="/Images/Microsoft.png"
          alt="company logo"
          width={150}
          height={80}
          layout="intrinsic"
        />
        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <Image
          src="/Images/Microsoft.png"
          alt="company logo"
          width={150}
          height={80}
          layout="intrinsic"
        />
        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <Image
          src="/Images/Microsoft.png"
          alt="company logo"
          width={150}
          height={80}
          layout="intrinsic"
        />
        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <Image
          src="/Images/Microsoft.png"
          alt="company logo"
          width={150}
          height={80}
          layout="intrinsic"
        />
        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <Image
          src="/Images/Microsoft.png"
          alt="company logo"
          width={150}
          height={80}
          layout="intrinsic"
        />
        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <Image
          src="/Images/Microsoft.png"
          alt="company logo"
          width={150}
          height={80}
          layout="intrinsic"
        />
        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <Image
          src="/Images/Microsoft.png"
          alt="company logo"
          width={150}
          height={80}
          layout="intrinsic"
        />
        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
    </Main>
  );
};

export default Network;
const Main = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0 40px 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const Name = styled.h4`
  font-family: "Poppins", sans-serif;
  text-align: left;
  font-weight: 300;
  margin: 0.2rem 0 0.2rem 0;
`;
const Header = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin: 0.5rem 0 0.2rem 5%;
`;
