import styled from 'styled-components';

const Event = ({name, date, location, description, image}) => {
    return (
        <div>
           <Card imageSource={image}> 
                <Info>
                    <Location>{location}</Location>
                    <Description>{description}</Description>
                    <RsvpBtn>
                        <a href="">RSVP Here</a>
                    </RsvpBtn>
                </Info> 
           </Card>
           <Title>
                <Name>{name}</Name>
                <p style ={{marginTop: "10px"}}>{date}</p>
           </Title>
        </div>
    )
}

export default Event

const Info = styled.div`
    text-align: center;
    opacity: 0;
    transition: opacity 500ms ease;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 9%;
    padding: 20px 5px;
    background-color: rgba(17,255,189, 0.85);
`;

const Card = styled.div`
    border: 2px solid #11FFBD;
    border-radius: 10%;
    width: 300px;
    height: 200px;
    position: relative;
    background-image:  url("${(props) => props.imageSource}");
    &:hover { 
        ${Info} {
            opacity: 1;
        }
    }
`;

const Location = styled.div`
    margin-top: 10px;
    color: white;
    font-size: 24px;
    font-weight: 600;
    font-family: ‘Poppins’, sans-serif;
`;

const Description = styled.div`
    margin: 20px 0px;
    color: white;
    font-weight: 100;
    font-family: ‘Poppins’, sans-serif;
`;

const RsvpBtn = styled.button`
    cursor: pointer;
    color: #11FFBD;
    background-color: white;
    border: none;
    text-align: center;
    font-weight: 900;
    font-size: 16px;
    font-family: ‘Poppins’, sans-serif;
    padding: 10px 60px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
`;
const Title = styled.div`
    text-align: center;
    font-family: ‘Poppins’, sans-serif;
`;

const Name = styled.h4`
    font-weight: 800;
    margin-bottom: 0px;
`;