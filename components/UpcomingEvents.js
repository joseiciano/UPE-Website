import Event from './Event'
import styled from 'styled-components';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

const UpcomingEvents = () => {
    const onPrevClick =  () => {

    };

    const onNextClick = () => {

    };

    return (
        <div>
            <H1>Upcoming Events</H1>
            <Grid>
                <div style={{paddingTop: '10vh'}}> 
                    <FaCaretLeft color={'#F7981D'} size={'4em'} ></FaCaretLeft>
                </div>
                
                <Event 
                    name={'Event Name'} 
                    date={'Today'}
                    location={'6:00 PM | PG6 112'}
                    description={'Create a portfolio site from scratch using HTML/CSS/JS'}
                    image={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>
                <Event 
                    name={'Event Name Here'} 
                    date={'Thursday, September 20 2020'}
                    location={'6:00 PM | PG6 112'}
                    description={'Create a portfolio site from scratch using HTML/CSS/JS'}
                    image={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>
                <Event 
                    name={'Event Name'} 
                    date={'Today'}
                    location={'6:00 PM | PG6 112'}
                    description={'Create a portfolio site from scratch using HTML/CSS/JS'}
                    image={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>

                <div style={{paddingTop: '10vh'}}> 
                    <FaCaretRight color={'#F7981D'} size={'4em'}></FaCaretRight>
                </div>
            </Grid>
        </div>
    )
}

export default UpcomingEvents

const H1 = styled.h1`
    text-align: center;
    color: #F7981D;
    font-weight: 900;
    font-size: 34px;
    font-family: ‘Poppins’, sans-serif;
`;

const Grid = styled.div`
    display: grid;
    grid-column-gap: 50px;
    grid-template-columns: auto auto auto auto auto;
`;