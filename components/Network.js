import styled from "styled-components";
import Image from "next/image";
const Image_width = 280;
const Image_height = 60;
const Network = () => {
  return (
    <Main>
      <Container>
        <a href="https://www.microsoft.com/en-us/">
          <Image
            src="/Images/Microsoft.png"
            alt="company logo"
            width={Image_width}
            height={Image_height}
          />
        </a>

        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <a href="https://www.microsoft.com/en-us/">
          <Image
            src="/Images/Microsoft.png"
            alt="company logo"
            width={Image_width}
            height={Image_height}
          />
        </a>

        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <a href="https://www.microsoft.com/en-us/">
          <Image
            src="/Images/Microsoft.png"
            alt="company logo"
            width={Image_width}
            height={Image_height}
          />
        </a>

        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <a href="https://www.microsoft.com/en-us/">
          <Image
            src="/Images/Microsoft.png"
            alt="company logo"
            width={Image_width}
            height={Image_height}
          />
        </a>

        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <a href="https://www.microsoft.com/en-us/">
          <Image
            src="/Images/Microsoft.png"
            alt="company logo"
            width={Image_width}
            height={Image_height}
          />
        </a>

        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <a href="https://www.microsoft.com/en-us/">
          <Image
            src="/Images/Microsoft.png"
            alt="company logo"
            width={Image_width}
            height={Image_height}
          />
        </a>

        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <a href="https://www.microsoft.com/en-us/">
          <Image
            src="/Images/Microsoft.png"
            alt="company logo"
            width={Image_width}
            height={Image_height}
          />
        </a>

        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <a href="https://www.microsoft.com/en-us/">
          <Image
            src="/Images/Microsoft.png"
            alt="company logo"
            width={Image_width}
            height={Image_height}
          />
        </a>

        <Header> Microsoft</Header>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
        <Name> Last Name, First Name </Name>
      </Container>
      <Container>
        <a href="https://www.microsoft.com/en-us/">
          <Image
            src="/Images/Microsoft.png"
            alt="company logo"
            width={Image_width}
            height={Image_height}
          />
        </a>

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
  align-items: center;
  width: 30%;
`;
const Name = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  margin: 0.2rem 0 0.2rem 0;
`;
const Header = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin: 0.5rem 0 0.2rem 0;
`;
