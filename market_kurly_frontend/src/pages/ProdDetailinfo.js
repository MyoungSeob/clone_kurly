import React, {useState, useRef} from "react";
import Grid from "elements/Grid";
import Text from "elements/Text";
import styled from "styled-components"

const ProdDetail = (props) => {
    const [number, setNumber] = useState(1);
    const [price, setPrice] = useState(12320);
    const [point, setPoint] = useState(616);
    const onePrice = 12320;
    const onePoint = 616;
    

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

    return (
        <React.Fragment>
            <Grid width="570px">
                <Grid borderBottom=" 1px solid #eee" padding="10px 0" >
                    <Grid flex_start height="36px">
                        <Text width="150px" color="#666">판매단위</Text>
                        <Text width="420px" color="#333">1병</Text>
                    </Grid>
                    <Grid flex_start height="36px">
                        <Text width="150px" color="#666">중량/용량</Text>
                        <Text width="420px" color="#333">1000ml</Text>
                    </Grid>
                </Grid>
                <Grid borderBottom=" 1px solid #eee" padding="10px 0" height="100%">
                    <Grid flex_start >
                        <Text width="150px" color="#666">배송구분</Text>
                        <Grid width="420px">
                            <Text width="420px" color="#333" margin="0">샛별배송/택배배송</Text>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid borderBottom=" 1px solid #eee" padding="10px 0" >
                    <Grid flex_start height="36px">
                        <Text width="150px" color="#666">배송구분</Text>
                        <Text width="420px" color="#333">샛별배송/택배배송</Text>
                    </Grid>
                </Grid>
                <Grid borderBottom=" 1px solid #eee" padding="10px 0" >
                    <Grid flex_start height="36px">
                        <Text width="150px" color="#666">포장타입</Text>
                        <Text width="420px" color="#333">냉장/종이포장</Text>
                        {/* <Text color="#666" size="12px">택배배송은 에코포장이 스티로폼으로 대체됩니다.</Text> */}
                    </Grid>
                </Grid>
                <Grid borderBottom=" 1px solid #eee" padding="10px 0" >
                    <Grid flex_start height="36px">
                        <Text width="150px" color="#666">알레르기정보</Text>
                        <Text width="420px" color="#333">-본 제품은 토마토를 사용한 제품과 같은 제조 시설에서 제조하고 있습니다.</Text>
                    </Grid>
                </Grid>
                <Grid borderBottom=" 1px solid #eee" padding="10px 0" >
                    <Grid flex_start height="36px">
                        <Text width="150px" color="#666">유통기한</Text>
                        <Text width="420px" color="#333">수령일 포함 최소 3일 남은 제품을 보내 드립니다</Text>
                    </Grid>
                </Grid>
                <Grid borderBottom=" 1px solid #eee" padding="10px 0" >
                    <Grid flex_start height="36px">
                        <Text width="150px" color="#666" margin="0">유통기한</Text>
                        <Text width="420px" color="#333" margin="0">수령일로부터 2~3일까지</Text>
                    </Grid>
                </Grid>
                <Grid borderBottom=" 1px solid #eee" padding="20px 0" height="100%">
                    <Grid flex_start >
                        <Text width="150px" color="#666">안내사항</Text>
                        <Grid width="420px">
                            <Text width="420px" color="#333" margin="0">- 콜린스그린 주스는 반드시 밀봉 상태로 냉장 보관해주세요.
                            원물을 그대로 담은 특성상 층 분리나 침전물이 있을 수 있지만, 이는 이물질이 아니므로 흔들어 드시기 바랍니다.</Text>
                            <Text width="420px" color="#333" margin="0">- 제품의 변질로 용기가 부풀어 있을 때 뚜껑을 열면 내용물이 터져 나올 수 있으니 주의하시기 바랍니다.</Text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid borderBottom=" 1px solid #eee" padding="10px 0" >
                    <Grid flex_start height="36px">
                        <Text width="150px" color="#666">구매수량</Text>
                        <SpanBox>
                            <BtnMinus onClick={minus}></BtnMinus>
                            <InputBox >{number}</InputBox>
                            <BtnPlus onClick={plus}></BtnPlus>
                        </SpanBox>
                    </Grid>
                </Grid>
                <TotalPrice>
                    <Text bold size="13px" margin="0 10px 0 0">총 상품금액 :</Text>
                    <Text bold size="30px" margin="0" height="33px">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                    <Text bold size="16px" margin="0 4px 0 4px" width="10px">원</Text>
                </TotalPrice>
                
                <Grid flex_end margin="0 8px 0 0">
                    <Text>구매 시 {point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 적립</Text>
                </Grid>
                <BtnOrder>장바구니 담기</BtnOrder>
            </Grid>
            
        </React.Fragment>
    )
}

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

export default ProdDetail;