import React, {useEffect} from "react";
import Grid from "elements/Grid";
import Text from "elements/Text";
import Input from "elements/Input";
import Span from "elements/Span";
import styled from "styled-components"

import {getLocal, setLocal, deleteLocal} from "shared/Cookie";
import { history } from "redux/configStore";
import { useSelector } from "react-redux";

const Header = (props) => {

    const is_login = localStorage.getItem('is_login')

    const name = localStorage.getItem('name')

    const has_token = localStorage.getItem("X-AUTH-TOKEN")


    // 로그아웃 버튼을 누르면, 로컬스토리지에 들어가있던 정보들이 장바구니 전용DB로 들어가게 해주는 함수입니다.
    function logout(){
        fetch("http://15.165.205.40/api/carts/products", {
            method : "PUT",
            headers : {
                "X-AUTH-TOKEN" : localStorage.getItem("X-AUTH-TOKEN"),
                // 저희 조 백엔드 분들과 정한 토큰 이름입니다! fetch의 headers에 넣어서 보내기로 해서, 
                // 로그인시 받은 토큰을 서버로 보내 사용자 인증을 합니다!
                'Content-Type' : 'application/json',
                // 저희가 보내는 정보들의 타입은 json타입이라는 함수입니다.
            },
            body : localStorage.getItem("cart"),
            // 로컬 스토리지에 저장되어 있는 cart라는 토큰값을 서버로 보내고, 서버에서는 그 값을 통해 
            // 장바구니 DB의 값을 수정합니다.
        })
        .then(res => console.log(res))
        localStorage.clear()       
        // 로그아웃 이후 로컬스토리지의 모든 토큰들을 삭제하여, 장바구니 DB와 로컬스토리지의 값이 다르지 않도록 하였습니다.
        history.replace('/')
    }

    function pushCart() {
        history.push('/cart');
        window.location.reload()
        // pushCart는 화면의 값과 로컬스토리지의 값이 다르게 보일 때를 방지하여 이동 후 새로고침하도록 하였습니다.
    }

    if(has_token){
        // 서버에서 로그인 시 준 X-AUTH-TOKEN의 유무로 헤더를 분기하여 로그인 했을 때와 하지 않았을 때를 구분지어 보여주는 조건문입니다.
        return ( 
            <React.Fragment>
                <Grid width="1035px" height="160px" margin="auto">
                    <Grid is_flex height="33px">
                        <Grid is_flex size="12px" margin="6px 0 0 0">
                            <Border>수도권 이외 지역 <Span color="purple" bold>택배배송</Span></Border>
                        </Grid>
                        <Grid flex_end padding="0px 0px 0px 8px">
                            
                            <Grid flex_center bold width="70px" size="12.4px">
                                <Text hover="pointer" color="#262626" size="12.4px">{name} 님</Text>
                                <Point></Point>
                            </Grid>
                            <Grid flex_center bold width="80px" size="12.4px">
                                <Text _onClick={logout} hover="pointer" color="#262626" size="12.4px">로그아웃</Text>
                                <Point></Point>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Logo onClick={() => {history.push('/')}}/>          
                    <Grid is_flex height="60px" height="70px" margin="62px 0 0">
                        <Grid flex_start width="450px">
                            <Grid flex_start size="18px" width="28px" margin="0.5px 2px 0 0">
                                <Bars></Bars>
                            </Grid>
                            <Grid flex_start bold width="130px">
                                <Text menuBar size="16px" bold>전체 카테고리</Text>
                            </Grid>
                        </Grid>
                        <Grid flex_center>
                            <Grid flex_center width="428px">
                                <Text menuBar size="16px" bold>신상품</Text>
                            </Grid>
                            <Grid flex_center>
                                <Text menuBar size="16px" bold>베스트</Text>
                            </Grid>
                            <Grid flex_center>
                                <Text menuBar size="16px" bold>알뜰쇼핑</Text>
                            </Grid>
                            <Grid flex_center>
                                <Text menuBar size="16px" bold>금주혜택</Text>
                            </Grid>
                        </Grid>
                        
                        <Grid flex_end>
                            <Grid width="250px" height="36px">                            
                                <Input is_submit placeholder="" height="36px"  width="242px" border="0px solid #ffffff">
                                    
                                </Input>
                                <Search></Search>
                            </Grid>
                            <Grid flex_center width="40px" margin="0 0 0 14px">
                                <Map></Map>
                            </Grid>
                            <Grid _onClick={pushCart} flex_center width="40px" margin="0 0 0 14px">
                                <Cart></Cart>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Grid width="1035px" height="160px" margin="auto">
                <Grid is_flex height="33px">
                    <Grid is_flex size="12px" margin="6px 0 0 0">
                        <Border>수도권 이외 지역 <Span color="purple" bold>택배배송</Span></Border>
                    </Grid>
                    <Grid flex_end padding="0px 0px 0px 8px">
                        <Grid flex_center bold width="62px" size="12.4px">
                            <Text _onClick={() => {history.push('/signup')}}hover="pointer" bold size="12.4px"><Span color="purple">회원가입</Span></Text>
                        </Grid >
                        <Grid flex_center bold width="62px" size="12.4px">
                            <Text _onClick={() => {history.push('/login')}} hover="pointer" color="#262626" bold size="12.4px">로그인</Text>
                        </Grid>
                        <Grid flex_center bold width="70px" size="12.4px">
                            <Text hover="pointer" color="#262626" bold size="12.4px">고객센터</Text>
                            <Point></Point>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Logo onClick={() => {history.push('/')}}></Logo>
                

                <Grid is_flex height="60px" height="70px" margin="62px 0 0">
                    <Grid flex_start width="450px">
                        <Grid flex_start size="18px" width="28px" margin="0.5px 2px 0 0">
                            <Bars></Bars>
                        </Grid>
                        <Grid flex_start bold width="130px">
                            <Text menuBar size="16px" bold>전체 카테고리</Text>
                        </Grid>
                    </Grid>
                    <Grid flex_center>
                        <Grid flex_center width="428px">
                            <Text menuBar size="16px" bold>신상품</Text>
                        </Grid>
                        <Grid flex_center>
                            <Text menuBar size="16px" bold>베스트</Text>
                        </Grid>
                        <Grid flex_center>
                            <Text menuBar size="16px" bold>알뜰쇼핑</Text>
                        </Grid>
                        <Grid flex_center>
                            <Text menuBar size="16px" bold>금주혜택</Text>
                        </Grid>
                    </Grid>
                    
                    <Grid flex_end>
                        <Grid width="250px" height="36px">                            
                            <Input is_submit placeholder="" height="36px"  width="242px" border="0px solid #ffffff">
                                
                            </Input>
                            <Search></Search>
                        </Grid>
                        <Grid flex_center width="40px" margin="0 0 0 14px">
                            <Map></Map>
                        </Grid>
                        <Grid _onClick={pushCart} flex_center width="40px" margin="0 0 0 14px">
                            <Cart></Cart>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {

}
// text-decoration: underline;
const Point = styled.div`
    
    width: 8px;
    height: 5px;
    margin: 1px 0 0 5px;
    background-image: url("https://res.kurly.com/pc/ico/1908/ico_down_16x10.png");
    background-size: 8px 5px;
    background-position: center;
`

const Logo = styled.div`
    position: absolute;
    left: 50%;
    top: 10%;
    width: 104px;
    max-width: 100%;
    margin-left: -52px;
    height: 79px;
    background-image: url("https://res.kurly.com/images/marketkurly/logo/logo_x2.png");
    background-size: cover;
    background-position: center;
    cursor: pointer;
`

// const Form = styled.form`
//     display: flex;
//     align-items: center; 
//     justify-content: center;
//     position:relative;
//     right: 5px;
//     top: 3px;
//     width: 30px;
//     height: 30px;
//     background-image: url("https://res.kurly.com/pc/service/common/1908/ico_search_x2.png");
//     background-size: cover;
//     background-position: center;
// `

const Bars = styled.div`
    width: 16px;
    height: 14px;
    margin: 0 0 1px 0;
    font-size: 16px;
    background-image: url("https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off_x2.png");
    background-size: cover;
    background-position: center;
    &: hover {
      cursor : pointer;
      color : #5f0080;
    }
`

const Search = styled.div`
    position: absolute;
    right: 5px;
    top: 3px;
    width: 30px;
    height: 30px;
    margin: 0 8px 0 0;
    background-image: url("https://res.kurly.com/pc/service/common/1908/ico_search_x2.png");
    background-size: cover;
    background-position: center;
    &: hover {
      cursor : pointer;
    }
`

const Map = styled.div`
    width: 36px;
    height: 36px;
    background-image: url("https://res.kurly.com/pc/ico/2008/ico_delivery_setting.svg?ver=1");
    background-size: cover;
    background-position: center;
    &: hover {
      cursor : pointer;
      color : #5f0080;
    }
`

const Cart = styled.div`
    width: 37px;
    height: 37px;
    background-image: url("https://res.kurly.com/pc/service/common/2011/ico_cart.svg");
    background-size: cover;
    background-position: center;
    &: hover {
      cursor : pointer;
      color : #5f0080;
    }
`

const Border = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 146px;
    height: 19px;
    border: solid 1px #D9D9D9;
    border-radius: 30px;
    color: #5c5c5c;
    &: hover {
      cursor : pointer;
    }
`

export default Header;

