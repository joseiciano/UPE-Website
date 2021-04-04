import styled from 'styled-components';

const Event = ({name, date, location, description, image, ndcolor, temp}) => {
    return (
        <div>
           <Card imageSource={"event_img.png"} ndcolor={ndcolor}> 
                <Info temp={temp}>
                    <Location>{location}</Location>
                    <Description>{description}</Description>
                    <RsvpBtn ndcolor={ndcolor}>
                        <a href="https://go.fiu.edu/upersvp">RSVP Here</a>
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
    background-color: ${props => props.temp}; 
    @media only screen and (max-width: 500px) {
        padding: 5px;
    }
`;

const Card = styled.div`
    border: 2px solid ${props => props.ndcolor};
    border-radius: 10%;
    width: 300px;
    height: 200px;
    position: relative;
    background-image:  url("${(props) => props.imageSource}");
    background-repeat: no-repeat;
    background-size: cover;
    &:hover { 
        ${Info} {
            opacity: 1;
        }
    }
    @media only screen and (max-width: 500px) {
        width: 150px;
        height: 100px;
    }
`;

const Location = styled.div`
    margin-top: 10px;
    color: white;
    font-size: 24px;
    font-weight: 600;
    font-family: ‘Poppins’, sans-serif;
    @media only screen and (max-width: 500px) {
        font-size: 12px;
        margin-top: 0px;
    }
`;

const Description = styled.div`
    margin: 20px 0px;
    color: white;
    font-weight: 100;
    font-family: ‘Poppins’, sans-serif;
    @media only screen and (max-width: 500px) {
        font-size: 12px;
        margin-top: 5px;
        margin-bottom: 0px;
    }
`;

const RsvpBtn = styled.button`
    cursor: pointer;
    color: ${props => props.ndcolor};
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
    @media only screen and (max-width: 500px) {
        font-size: 8px;
        padding: 5px 30px;
    }
`;
const Title = styled.div`
    text-align: center;
    font-family: ‘Poppins’, sans-serif;
    @media only screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

const Name = styled.h4`
    font-weight: 800;
    margin-bottom: 0px;
`;