import Event from "./Event";
import styled from "styled-components";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Carousel, { consts } from "react-elastic-carousel";

const UpcomingEvents = (props) => {
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <FaCaretLeft color={props.ndcolor} size={"4em"} cursor={"pointer"} />
      ) : (
        <FaCaretRight color={props.ndcolor} size={"4em"} cursor={"pointer"} />
      );
    return (
      <Arrow onClick={onClick} disabled={isEdge}>
        {pointer}
      </Arrow>
    );
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 650, itemsToShow: 2, pagination: false },
    { width: 1000, itemsToShow: 3, pagination: false },
    { width: 1300, itemsToShow: 4, pagination: false },
    { width: 1600, itemsToShow: 5, pagination: false },
  ];

  return (
    <div style={{ width: "100%" }}>
      <H1 ndcolor={props.ndcolor}>Upcoming Events</H1>
      <Carousel renderArrow={myArrow} breakPoints={breakPoints}>
        <Event
          name={"Event Name 1"}
          date={"Today"}
          location={"6:00 PM | PG6 112"}
          description={"Create a portfolio site from scratch using HTML/CSS/JS"}
          image={"http://pngimg.com/uploads/cat/cat_PNG50514.png"}
          ndcolor={props.ndcolor}
          temp={props.temp}
        />
        <Event
          name={"Event Name 2"}
          date={"Thursday, September 20 2020"}
          location={"6:00 PM | PG6 112"}
          description={"Create a portfolio site from scratch using HTML/CSS/JS"}
          image={"http://pngimg.com/uploads/cat/cat_PNG50514.png"}
          ndcolor={props.ndcolor}
          temp={props.temp}
        />
        <Event
          name={"Event Name 3"}
          date={"Today"}
          location={"6:00 PM | PG6 112"}
          description={"Create a portfolio site from scratch using HTML/CSS/JS"}
          image={"http://pngimg.com/uploads/cat/cat_PNG50514.png"}
          ndcolor={props.ndcolor}
          temp={props.temp}
        />
        <Event
          name={"Event Name 4"}
          date={"Today"}
          location={"6:00 PM | PG6 112"}
          description={"Create a portfolio site from scratch using HTML/CSS/JS"}
          image={"http://pngimg.com/uploads/cat/cat_PNG50514.png"}
          ndcolor={props.ndcolor}
          temp={props.temp}
        />
        <Event
          name={"Event Name 5"}
          date={"Today"}
          location={"6:00 PM | PG6 112"}
          description={"Create a portfolio site from scratch using HTML/CSS/JS"}
          image={"http://pngimg.com/uploads/cat/cat_PNG50514.png"}
          ndcolor={props.ndcolor}
          temp={props.temp}
        />
      </Carousel>
    </div>
  );
};

export default UpcomingEvents;

const H1 = styled.h1`
  text-align: center;
  color: ${(props) => props.ndcolor};
  font-weight: 900;
  font-size: 34px;
  font-family: ‘Poppins’, sans-serif;
`;

const Arrow = styled.div`
  padding-top: 8vh;
  @media only screen and (max-width: 500px) {
    padding-top: 3vh;
  }
`;
