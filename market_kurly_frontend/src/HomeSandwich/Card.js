import React from 'react';
import Grid from 'elements/Grid';
import Image from 'elements/Image'
import styled from 'styled-components'



const Card = (props) => {
  // const { src, title, sales, price_origin, price_sell } = props;

  return (
    <React.Fragment>
      <CardBody>
        <ImageDiv>
          <Image src={props.main_image_url}></Image>
        </ImageDiv>
        <div>
          <TitleDiv>
            <Title>{props.name}</Title>
          </TitleDiv>
          <div>
            <Sales>
                <Sale>
              {props.discount_percent}%
              </Sale>
              <span>{props.discounted_price}원</span>
            </Sales>
          </div>
          <div>
            <Origin>{props.original_price}원</Origin>
          </div>
        </div>
      </CardBody>
    </React.Fragment>
  );
};

Card.defaultProps = {
    id: 0,
    name: "자른 미역 30g(냉장)",
    original_price: "1,900",
    discounted_price: "1,672",
    discount_percent: "12",
    main_image_url: "https://img-cf.kurly.com/shop/data/goods/147918052537l0.jpg",
}
const ImageDiv = styled.div`
    &: hover {
        cursor : pointer;
    }
`
const CardBody = styled.div`
    float : left;
    position : relative;
    width : 249px;
    height : 506px;
`
const TitleDiv = styled.div`
    margin-top : 12px;
`
const Title = styled.a`
    max-height : 50px;
    text-overflow : ellipsis;
    font-size : 16px;
    line-height : 23px;
    &: hover {
        cursor : pointer;
    }
`
const Sales = styled.span`
    display : block;
    padding-top : 9px;
    font-weight : 800;
    font-size : 16px;
    line-height : 20px;
    padding-right
`
const Sale = styled.span`
    padding-right : 8px;
    font-weight : 800;
    font-size : 16px;
    color : #fa622f;
    line-height : 20px;
`
const Origin = styled.span`
    display : block;
    padding-top : 5px;
    font-size : 14px;
    color : #999;
    line-height : 18px;
    text-decoration : line-through;
`




export default Card;