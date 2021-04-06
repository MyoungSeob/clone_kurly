import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styled from 'styled-components';

const SignUp = (props) => {

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
                  ></InPut>
                  <span>
                    <CheckBox>중복확인</CheckBox>
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
                    type="text"
                    label="비밀번호"
                    placeholder="비밀번호를 입력해주세요."
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
                    type="text"
                    label="비밀번호"
                    placeholder="비밀번호를 한번 더 입력해주세요."
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
                  ></InPut>
                </InputBox>
              </LineBox>
            </Tbody>
          </Table>
          <BR/>
          <ButtonBox>
          <SignButton>가입하기</SignButton>
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
`
const ButtonBox = styled.div`
    text-align : center
`

export default SignUp;