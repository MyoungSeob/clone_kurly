import React, { useState } from 'react';
import styled from 'styled-components';
import Card from 'HomeSandwich/Card';
import Grid from 'elements/Grid'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {actionCreators as cardActions} from "redux/modules/card";
import {history} from "redux/configStore";
import {useHistory} from "react-router"

import {useSelector, useDispatch} from "react-redux";


const CardList = (props) => {
  
  const dispatch = useDispatch();
  const history = useHistory();

  const card_list = useSelector((state) => state.card.list);

  // const [items, setItems] = useState([]);

  React.useEffect(() => {
    dispatch(cardActions.loadCardDB())
  }, []);


  const settings = {
    dots: true,
    arrows : true,
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
          {/* map함수를 이용하여 카드의 key에 id값을 하나하나 넣고 그 값들을 표현하였습니다.
          또한 div elements인 Grid에도 map을 이용하여 각각의 주소값을 가질 수 있도록 하였습니다. */}
          {card_list.map((c, idx) => {
            return (
              <Grid
                key={c.id}
                _onClick={() => {
                  history.push(`/proddetail/${c.id}`);
                }}
              >
                <Card key={c.id} {...c} />
              </Grid>
            );            
          })}        
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