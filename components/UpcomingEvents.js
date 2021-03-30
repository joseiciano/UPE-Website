import Event from './Event'
import styled from 'styled-components';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Carousel, {consts} from 'react-elastic-carousel';

const UpcomingEvents = () => {
   
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <FaCaretLeft color={'#F7981D'} size={'4em'} cursor={'pointer'} /> :  <FaCaretRight color={'#F7981D'} size={'4em'} cursor={'pointer'} />;
        return (
            <div style={{paddingTop: '12vh'}} onClick={onClick} disabled={isEdge}>
                {pointer}
            </div>
        );
    }

    return (
        <div style={{width: "100%"}}>
            <H1>Upcoming Events</H1>
            <Carousel renderArrow={myArrow} itemsToShow={3} renderPagination={ () => {return (<div display={'none'}></div>)} }>
             
                <Event 
                    name={'Event Name 1'} 
                    date={'Today'}
                    location={'6:00 PM | PG6 112'}
                    description={'Create a portfolio site from scratch using HTML/CSS/JS'}
                    image={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>
                <Event 
                    name={'Event Name 2'} 
                    date={'Thursday, September 20 2020'}
                    location={'6:00 PM | PG6 112'}
                    description={'Create a portfolio site from scratch using HTML/CSS/JS'}
                    image={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>
                <Event 
                    name={'Event Name 3'} 
                    date={'Today'}
                    location={'6:00 PM | PG6 112'}
                    description={'Create a portfolio site from scratch using HTML/CSS/JS'}
                    image={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>
                <Event 
                    name={'Event Name 4'} 
                    date={'Today'}
                    location={'6:00 PM | PG6 112'}
                    description={'Create a portfolio site from scratch using HTML/CSS/JS'}
                    image={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>

            </Carousel>
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
