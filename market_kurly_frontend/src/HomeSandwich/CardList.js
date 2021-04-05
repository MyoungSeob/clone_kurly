import React from 'react';
import styled from 'styled-components';
import Card from 'HomeSandwich/Card';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CardList = (props) => {

  const settings = {
    dots: false,
    arrows : false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <React.Fragment>
      <Title>
        <H>
          <Span>이 상품 어때요?</Span>
        </H>
      </Title>
      <List>
        <StyledSlider {...settings}>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>             
        </StyledSlider>
      </List>
    </React.Fragment>
  );
};

const StyledSlider = styled(Slider)`
  .slick-slide div{
    outline : none;
    width : 100%
    padding-right : 18px;
    arrows : true;
  }
`
const List = styled.div`
  width : 1070px;
  item-align : center;
  margin : auto;
`
const Title = styled.div`
    padding : 79px 0 35px;
`
const H = styled.h3`
    font-weight : 700;
    font-size : 28px;
    line-height : 32px;
    letter-spacing : -0.3px;
    text-align : center;
`
const Span = styled.span`
    position : relative;
    font-weight : 700;
`
export default CardList;