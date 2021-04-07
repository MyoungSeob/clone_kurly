import React from "react";
import Grid from "elements/Grid";
import Button from "elements/Button";
import Text from "elements/Text";
import Input from "elements/Input";
import LoginBox from "elements/LoginBox";
import styled from "styled-components";
import {history} from "redux/configStore"

import Header from "components/Header";
import Footer from "components/Footer";
import { getCookie, setCookie } from "shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from 'redux/modules/user'

import {getLocal, setLocal, deleteLocal} from "shared/Cookie";

const Login = (props) => {

    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");

    const login = () => {
        // console.log(getCookie('user_id'))
        setLocal("username", "mok");
        setLocal("password", "123");
        // dispatch(userActions.loginDB(id, pwd));
        // history.push('/')
    }

    return (
        <React.Fragment>
            <Header></Header>
     
            <Grid width="340px" margin="0 auto" padding="90px 0 100px">
                <Text bold margin="0px auto 34px" size="21px" width="100%" center="center">로그인</Text>

                <LoginBox _onChange={(e) => {setId(e.target.value)}} placeholder="아이디를 입력해주세요">             
                </LoginBox>

                <LoginBox _onChange={(e) => {setPwd(e.target.value)}} placeholder="비밀번호를 입력해주세요">
                </LoginBox>

                <Grid is_flex margin="11px 0">
                    <Grid flex_start>
                        <Check />
                        <Text color="#4f4f4f" bold size="13px" margin="0 0 0px 6px"> 보안접속</Text>
                    </Grid>
                    <Grid flex_end>
                        <Text color="#4f4f4f" bold size="13px" margin="0">아이디 찾기</Text>
                        <Text color="#4f4f4f" bold size="13px" margin="0 0 0 4px">| 비밀번호 찾기</Text>
                    </Grid>
                </Grid>

                <ButtonLogin onClick={()=>{login()}}>
                    <Text  bold color="#ffffff" size="16.5px" margin="1px 0 0 0">로그인</Text>
                </ButtonLogin>
                <ButtonSignup>
                    <Text bold color="#5f0081" size="16px" margin="1px 0 0 0">회원가입</Text>
                </ButtonSignup>
                
            </Grid>
            
            <Footer></Footer>
        </React.Fragment>
    )
}

const ButtonSignup = styled.button`
    margin: 10px 0 0 0;
    width: 100%;
    height: 54px;
    border-radius: 3px;
    border: 1px solid #5f0081;
    background-color: #ffffff;
    
`;

const ButtonLogin = styled.button`
    margin: 19px 0 0 0;
    width: 100%;
    height: 54px;
    border-radius: 3px;
    border: 1px solid #5f0081;
    background-color: #5f0080;
    
`;

const Check = styled.input`
    
    width: 10px;
    height: 12px;
    border-radius: 3px;
    border: 1px solid #8c8c8c;
    background-size: 16px 17px;
    
`;


export default Login;