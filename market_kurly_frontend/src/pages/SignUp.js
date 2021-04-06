import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {actionCreators as userActions} from 'redux/modules/user'
import {history} from 'redux/configStore'

const SignUp = (props) => {
    const dispatch = useDispatch()
    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [check_pwd, setCheckPwd] = React.useState("");
    const [name, setName] = React.useState("");
    const signup =()=>{
        if (id === "" || pwd === "" || check_pwd ==="" || name ==="") {
            window.alert("위의 내용들을 모두 입력해주세요!")
            return;
        }
        if(pwd !== check_pwd){
            window.alert("비밀번호와 재입력된 비밀번호가 다릅니다.")
            return;
        }
        dispatch(userActions.signupDB(id, pwd, name));
        history.push('/')
        console.log(name)
    }
    function check () {
      fetch('http://15.165.205.40/api/signup/checkid', {
          method : "POST",
          body : JSON.stringify({
            username : id,
          }),
          headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
          }
      })
      .then(res => res.json())
      .then(res => {
        if(res.ok){
          window.alert(res.msg)
        }else{
          window.alert(res.msg)
        }
      })
      console.log(123)
    }
    
    return (
      <React.Fragment>
        <Header />

        <SignBox>
          <Sign>회원가입</Sign>
          <MustContents>
            <Ico>*</Ico>필수입력사항
          </MustContents>
          <Table>
            <Tbody>
              <LineBox>
                <FirstContents>
                  아이디<Ico>*</Ico>
                </FirstContents>
                <InputBox>
                  <InPut
                    type="text"
                    label="아이디"
                    placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                  ></InPut>
                  <span>
                    <CheckBox onClick={check}>중복확인</CheckBox>
                  </span>
                </InputBox>
              </LineBox>
            </Tbody>
            <Tbody>
              <LineBox>
                <FirstContents>
                  비밀번호<Ico>*</Ico>
                </FirstContents>
                <InputBox>
                  <InPut
                    type="password"
                    label="비밀번호"
                    placeholder="비밀번호를 입력해주세요."
                    onChange={(e) => {
                        setPwd(e.target.value);
                    }}
                  ></InPut>
                </InputBox>
              </LineBox>
            </Tbody>
            <Tbody>
              <LineBox>
                <FirstContents>
                  비밀번호확인<Ico>*</Ico>
                </FirstContents>
                <InputBox>
                  <InPut
                    type="password"
                    label="비밀번호"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    onChange={(e) => {
                        setCheckPwd(e.target.value);
                    }}
                  ></InPut>
                </InputBox>
              </LineBox>
            </Tbody>
            <Tbody>
              <LineBox>
                <FirstContents>
                  이름<Ico>*</Ico>
                </FirstContents>
                <InputBox>
                  <InPut
                    type="text"
                    label="이름"
                    placeholder="이름을 입력해주세요."
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                  ></InPut>
                </InputBox>
              </LineBox>
            </Tbody>
          </Table>
          <BR/>
          <ButtonBox>
          <SignButton onClick={signup}>가입하기</SignButton>
          </ButtonBox>
        </SignBox>
        <Footer />
      </React.Fragment>
    );
} 

const SignBox = styled.div`
    width : 640px;
    position : relative;
    margin : 0px auto;
`
const Sign = styled.h3`
    font-size : 30px;
    text-align : center;
`
const Ico = styled.span`
    color : #ee6a7b;
    padding-right : 2px;
`
const MustContents = styled.p`
    font-size : 10px;
    text-align : right;
`
const Table = styled.table`
    width : 100%;
    border-top : 2px solid #333;
`
const Tbody = styled.tbody`
    font-weight : 400;
`
const LineBox = styled.tr`
    padding : 10px 0;
`
const FirstContents = styled.th`
    width : 139px;
    padding : 29px 0px 0px 20px;
    font-weight : 700;
    font-size : 14px;
    color : #333;
    line-height : 20px;
    vertical-align : top;
    text-align : left;
`
const InputBox = styled.td`
    padding-top : 19px;
`
const InPut = styled.input`
    width : 302px;
    height : 44px;
    padding : 0 14px;
    border : 1px solid #ccc;
    font-size : 14px;
    line-height : 20px;
    boder-radius : 3px;
    background : #fff;
    vertical-align : top;
`
const CheckBox = styled.a`
    border : 1px solid #5f0080;
    background-color : #fff;
    color : #5f0080;
    display : inline-block;
    width : 120px;
    height : 44px;
    font-size : 14px;
    text-align : center;
    border-radius : 3px;
    font-weight : 700;
    line-height : 40px;
    margin-left : 5px;
    vertical-align : top;

`
const BR = styled.hr`
    margin-top : 19px;
    border-top : 2px solid;
    width : 100%;
`
const SignButton = styled.button`
    width : 240px;
    height : 56px;
    font-size : 16px;
    line-height : 54px;
    border : 1px solid #5f0081;
    background-color : #5f0080;
    color : #fff;
    font-weight : 70;
    border-radius : 3px;
    &: hover {
        cursor : pointer;
    }
`
const ButtonBox = styled.div`
    text-align : center
`

export default SignUp;