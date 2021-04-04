import styled from 'styled-components';
import { FaGraduationCap, FaAward, FaBookmark, FaCrown, FaUserFriends } from "react-icons/fa";

const Benefits = () => {
    return (
        <Grid>
            <LeftGrid>
                <img className="image" src="benefits.png" width='550' height='550'></img>
            </LeftGrid>
            <RightGrid>
                <H1>Our Benefits</H1>
                <Item>
                    <Icon><FaGraduationCap color={'white'}></FaGraduationCap></Icon>
                    <Benefit>SCHOLARSHIP</Benefit>
                </Item>
                <Item>
                    <Icon><FaBookmark color={'white'}></FaBookmark></Icon>
                    <Benefit>MEMORABILIA</Benefit>
                </Item>
                <Item>
                    <Icon><FaAward color={'white'}></FaAward></Icon>
                    <Benefit>RECOMMENDATIONS</Benefit>
                </Item>
                <Item>
                    <Icon><FaCrown color={'white'}></FaCrown></Icon>
                    <Benefit>LEADERSHIP ROLES</Benefit>
                </Item>
                <Item>
                    <Icon><FaUserFriends color={'white'}></FaUserFriends></Icon>
                    <Benefit>MEMBER EVENTS</Benefit>
                </Item>

                <Button>
                    <a href='https://airtable.com/shr6SZvMXBGvPPrge'>Membership Application</a>
                </Button>
            </RightGrid>
        </Grid>
    )
}

export default Benefits

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    @media only screen and (max-width: 900px) {
        display: grid;
        grid-template-columns: auto;
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

const H1 = styled.h1`
    text-align: center;
    color: #F7981D;
    font-weight: 900;
    font-size: 34px;
    font-family: ‘Poppins’, sans-serif;
`;

const Button = styled.button` 
    cursor: pointer;
    border: none;
    color: white;
    margin-left: 32px;
    margin-top: 27px;
    padding: 10px 32px;
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

const Item = styled.div` 
    justify-content: left;
    display: grid;
    grid-template-columns: auto auto;
    padding-bottom: 5px;
`;

const Icon = styled.div`
    background: linear-gradient(90deg, rgba(253,207,12,1) 0%, rgba(248,155,33,1) 100%);
    height: 64px;
    width: 64px;
    line-height: 70px;
    font-size: 30px;
    border-radius: 500px;
    position: relative;
    float: left;
    margin-right: 30px;
    margin-left: 2px;
    text-align: center;
`;

const Benefit = styled.h4` 
    font-weight: 600;
    font-size: 18px;
    font-family: ‘Poppins’, sans-serif;
`;