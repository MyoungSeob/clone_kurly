import React from 'react';
import Grid from 'elements/Grid';
import Image from 'elements/Image'
import styled from 'styled-components'



const Card = (props) => {
  const { src, title, sales, price_origin, price_sell } = props;

  return (
    <React.Fragment>
      <CardBody>
        <ImageDiv>
          <Image src={props.src}></Image>
        </ImageDiv>
        <div>
          <TitleDiv>
            <Title>{title}</Title>
          </TitleDiv>
          <div>
            <Sales>
                <Sale>
              {sales}
              </Sale>
              <span>{price_sell}</span>
            </Sales>
          </div>
          <div>
            <Origin>{price_origin}</Origin>
          </div>
        </div>
      </CardBody>
    </React.Fragment>
  );
};

Card.defaultProps = {
    title : "[솔가] 아연 (100일분)",
    sales : "40%",
    price_sell : "19,800원",
    price_origin : "33,000원",
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