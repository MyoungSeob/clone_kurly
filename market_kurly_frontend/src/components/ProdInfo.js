import React, {useState, useRef} from "react";
import Grid from "elements/Grid";
import Text from "elements/Text";
import styled from 'styled-components';
import Image from 'elements/Image';
import Permit from "shared/Permit";

const ProdInfo =(props)=>{
    
    const [number, setNumber] = useState(1);
    const [price, setPrice] = useState(12320);
    const [point, setPoint] = useState(616);
    const onePrice = 12320;
    const onePoint = 616;
    
    const has_token = localStorage.getItem("X-AUTH-TOKEN")

    const plus = () => {
        setNumber(number + 1);
        setPrice(price + onePrice);
        setPoint(point + onePoint);
        
    }

    const minus = () => {
        setNumber(number > 0? number - 1 : 0);
        setPrice(price > 0? price - onePrice : 0);
        setPoint(point > 0? point - onePoint : 0);
        
    }
    const {contactant, expiration_date, extended_infos, guides} = props;
    
    const regExp = /[\{\}\[\]\/?,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi
   
    return (
      <React.Fragment>
        <Container>
          <FloatL>
            <Image
              width="430px"
              height="552px"
              src={props.main_image_url}
            ></Image>
          </FloatL>
          <FloatR>
            <ProdNameBox>
              <ProdName>{props.name}</ProdName>
              <ProdDesc>{props.short_description}</ProdDesc>
            </ProdNameBox>
            <PriceBox>
              <Permit>
                <UserDis>회원할인가</UserDis>
              </Permit>
              <DisPrice>
                {props.discounted_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </DisPrice>
              <Won>원</Won>
              <DisPercent>{props.discount_percent}%</DisPercent>
              <OriginBox>
                <OrgPrice>
                  {props.original_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </OrgPrice>
              </OriginBox>
              {has_token ? (
                <ExepectP>
                  개당{" "}
                  <Point>
                    {props.expected_point
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원 적립
                  </Point>
                </ExepectP>
              ) : (
                <ExepectPLog>
                  로그인 후, 회원할인가와 적립혜택이 제공됩니다.
                </ExepectPLog>
              )}
            </PriceBox>
            <Grid width="570px" padding="20px 0 0 11px">
              <Grid borderBottom=" 1px solid #eee" padding="10px 0 10px">
                <Grid flex_start height="36px" padding="10px 0 0">
                  <Text width="150px" color="#666">
                    판매단위
                  </Text>
                  <Text width="420px" color="#333">
                    {props.unit_text}
                  </Text>
                </Grid>
                <Grid flex_start height="36px">
                  <Text width="150px" color="#666">
                    중량/용량
                  </Text>
                  <Text width="420px" color="#333">
                    {props.weight}
                  </Text>
                </Grid>
              </Grid>

              <Grid borderBottom=" 1px solid #eee" padding="10px 0">
                <Grid flex_start height="36px">
                  <Text width="150px" color="#666">
                    배송구분
                  </Text>
                  <Text width="420px" color="#333">
                    {props.delivery_time_type_text}
                  </Text>
                </Grid>
              </Grid>
              <Grid borderBottom=" 1px solid #eee" padding="10px 0">
                <Grid flex_start height="36px">
                  <Text width="150px" color="#666">
                    포장타입
                  </Text>
                  <Text width="420px" color="#333">
                    {props.packing_type_text}
                  </Text>
                  {/* <Text color="#666" size="12px">택배배송은 에코포장이 스티로폼으로 대체됩니다.</Text> */}
                </Grid>
              </Grid>
              {contactant ? (
                <Grid borderBottom=" 1px solid #eee" padding="4px 0">
                  <Grid flex_start height="100%">
                    <Text width="150px" color="#666">
                      알레르기정보
                    </Text>
                    <Text width="420px" color="#333">
                      {props.contactant.replaceAll("<br />", "")}
                    </Text>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
              {expiration_date ? (
                <Grid borderBottom=" 1px solid #eee" padding="10px 0">
                  <Grid flex_start height="36px">
                    <Text width="150px" color="#666">
                      유통기한
                    </Text>
                    <Text width="420px" color="#333">
                      {props.expiration_date}
                    </Text>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
              {extended_infos != "[]" && extended_infos ? (
                <Grid borderBottom=" 1px solid #eee" padding="10px 0">
                  <Grid flex_start height="36px">
                    <Text width="150px" color="#666" margin="0">
                      유통기한
                    </Text>
                    <Text width="420px" color="#333" margin="0">
                      {props.extended_infos.split(":")[1].replace(regExp, "")}
                    </Text>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
              {guides != "[]" && guides ? (
                <Grid
                  borderBottom=" 1px solid #eee"
                  padding="16px 0"
                  height="100%"
                >
                  <Grid flex_start height="100%">
                    <Text width="150px" color="#666">
                      안내사항
                    </Text>
                    <Grid width="420px" padding="0">
                      <Text width="420px" color="#333" margin="0 0 0 8px">
                        {"- " + props.guides.replace(regExp, "")}
                      </Text>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}

              <Grid borderBottom=" 1px solid #eee" padding="10px 0">
                <Grid flex_start height="36px">
                  <Text width="150px" color="#666">
                    구매수량
                  </Text>
                  <SpanBox>
                    <BtnMinus onClick={minus}></BtnMinus>
                    <InputBox>{number}</InputBox>
                    <BtnPlus onClick={plus}></BtnPlus>
                  </SpanBox>
                </Grid>
              </Grid>
              <TotalPrice>
                <Text bold size="13px" margin="0 10px 0 0">
                  총 상품금액 :
                </Text>
                <Text bold size="30px" margin="0" height="33px">
                  {(number * props.discounted_price)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
                <Text bold size="16px" margin="0 4px 0 4px" width="10px">
                  원
                </Text>
              </TotalPrice>

              <Grid flex_end margin="0 8px 0 0">
                {has_token ? (
                    <Text>
                    구매 시{" "}
                    {(number * props.expected_point)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원 적립
                  </Text>
                ) : (
                    <ExepectPoint>로그인 후, 회원할인가와 적립혜택 제공</ExepectPoint>
                )}
              </Grid>
              <BtnOrder>장바구니 담기</BtnOrder>
            </Grid>
          </FloatR>
        </Container>
      </React.Fragment>
    );
}

ProdInfo.defaultProps ={
  name : "[콜린스그린] 더 오렌지",
  short_description: "물 한방울 넣지 않고 순수한 오렌지 과육을 짜낸 100% 착즙 오렌지 주스",
  original_price : "17,600",
  discounted_price: "12320",
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
    width : 570px;
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
    padding : 11px 0 16px;
    font-size : 14px;
    line-height : 18px;
    border-bottom: 1px solid #eee;
`
const ExepectPLog = styled.span`
    display : block;
    padding-top : 7px;
    font-size : 14px;
    color : #5f0080;
    line-height : 20px;
    letter-spacing : 0;
`
const Point = styled.strong`
    font-weight : 700;
`

const BtnOrder = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-radius: 3px;
    background-color: #5F0080;
    &: hover {
      cursor : pointer;
    }
`

const TotalPrice = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 26px 0 10px;
`

const InputBox = styled.p`
    
    width: 30px;
    height: 20px;
    margin: 5px 0 0;
    // margin-right: -1px;
    padding: 0;
    border: 0;
    background-color: #fff;
    font-size: 14px;
    color: #000;
    line-height: 18px;
    text-align: center;
    max-width: 100%;
    box-sizing: border-box;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline;
    cursor: text;
`
const ExepectPoint = styled.span`
    display : block;
    font-size : 14px;
    color : #666;
    line-height : 20px;
    text-align : right;
`

const SpanBox = styled.button`
    overflow: hidden;
    display: flex;

    float: left;
    width: 88px;
    height: 30px;
    border: 1px solid #dddfe1;
    border-radius: 3px;
    background-color: #fff;
    color: #333;
    letter-spacing: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`

const BtnMinus = styled.button`
    width: 28px;
    height: 28px;
    max-width: 100%;
    display: inline-block;
    text-align: center;
    text-transform: none;
    background-image: url("https://res.kurly.com/pc/ico/2010/ico_minus_on.svg");
    background-size: 30px 30px;
    background-position: center;
    background-color: #fff;
    border: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    &: hover {
      cursor : pointer;
    }
`

const BtnPlus = styled.button`
    width: 28px;
    height: 28px;
    max-width: 100%;
    display: inline-block;
    text-align: center;
    text-transform: none;
    background-image: url("https://res.kurly.com/pc/ico/2010/ico_plus_on.svg");
    background-size: 30px 30px;
    background-position: center;
    background-color: #fff;
    border: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    &: hover {
      cursor : pointer;
    }
`

export default ProdInfo;