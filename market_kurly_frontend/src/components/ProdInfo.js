import React from 'react';
import styled from 'styled-components';
import Image from 'elements/Image';
const ProdInfo =(props)=>{
   
    return (
      <React.Fragment>
        <Container>
          <FloatL>
            <Image width="430px" height="552px" scr={props.main_image_url}></Image>
          </FloatL>
          <FloatR>
          <ProdNameBox>
            <ProdName>{props.name}</ProdName>
            <ProdDesc>{props.short_description}</ProdDesc>
          </ProdNameBox>
          <PriceBox>
            <UserDis>회원할인가</UserDis>
            <DisPrice>{props.discounted_price}</DisPrice>
            <Won>원</Won>
            <DisPercent>{props.discount_percent}%</DisPercent>
            <OriginBox>
              <OrgPrice>{props.original_price}원</OrgPrice>
            </OriginBox>
            <ExepectP>
              개당 <Point>{props.expected_point}원 적립</Point>
            </ExepectP>
          </PriceBox>
          </FloatR>
        </Container>
      </React.Fragment>
    );
}

ProdInfo.defaultProps ={
  name : "[콜린스그린] 더 오렌지",
  short_description: "물 한방울 넣지 않고 순수한 오렌지 과육을 짜낸 100% 착즙 오렌지 주스",
  original_price : "17,600",
  discounted_price: "12,320",
  discount_percent: "30",
  expected_point: "616",
  main_image_url: "https://img-cf.kurly.com/shop/data/goods/147918052537l0.jpg",
}

const Container = styled.div`
    width : 1050px;
    margin : 0 auto;
    padding-top : 20px;
`
const FloatL = styled.div `
    float : left;
 
`
const FloatR = styled.div `
    Float : right;
    width : 550px;
`
const ProdNameBox = styled.div`
    width : 560px;
    padding : 10px 0 29px;
    float : right;
`
const ProdName = styled.p`
    display : block;
    padding-right : 60px;
    font-weight : 700;
    font-size :24px;
    line-height : 34px;
    word-break : break-all;
    margin : 0;
`
const ProdDesc = styled.span`
    display : block;
    padding : 4px 60px 0 0;
    font-size : 14px;
    color : #999;
    line-height : 20px;
    word-break : break-all;
`
const PriceBox = styled.p`
    float : right;
    width : 560px;
    padding : 0 0 0 0;
    margin : 0;
`
const UserDis = styled.span`
    float : right;
    width : 539px;
    padding-right : 21px;
    font-size : 14px;
    line-height : 20px;
    margin : 0;
`
const DisPrice = styled.span`
    font-weight : 700;
    font-size : 28px;
    line-height : 30px;
    letter-spacing : 0;
    word-break : break-all;
`
const Won = styled.span`
    padding : 0 7px 0 2px;
    font-weight : 700;
    font-size : 18px;
    line-height : 30px;
    vertical-align : 2px;
    letter-spacing : 0;
`
const DisPercent = styled.span`
    font-weight : 700;
    font-size : 28px;
    color : #fa622f;
    line-height : 30px;
    letter-spacing : 0;
`
const OriginBox = styled.p`
    margin : 0px
`
const OrgPrice = styled.span`
    font-size : 16px;
    color : #999;
    line-height : 24px;
    text-decoration : line-through;
`
const ExepectP = styled.span`
    display : block;
    over-flow : hidden;
    padding-top : 11px;
    font-size : 14px;
    line-height : 18px;
`
const Point = styled.strong`
    font-weight : 700;
`


export default ProdInfo;