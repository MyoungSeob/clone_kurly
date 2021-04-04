import React from "react";
import Grid from "elements/Grid";
import Button from "elements/Button";
import Text from "elements/Text";
import styled from "styled-components"

const Md = (props) => {

    return (
        <React.Fragment>
            <Grid margin="50px 0">
                <Grid flex_center>
                    <MdButton> <Text bold color="#333">채소</Text> </MdButton>
                    <MdButton> <Text bold color="#333">과일 · 견과 · 쌀</Text> </MdButton>
                    <MdButton> <Text bold color="#333">수산 · 해산 · 건어물</Text> </MdButton>
                    <MdButton> <Text bold color="#333">정육 · 계란</Text> </MdButton>
                    <MdButton> <Text bold color="#333">국 · 반찬 · 메인요리</Text> </MdButton>
                    <MdButton> <Text bold color="#333">샐러드 · 간편식</Text> </MdButton>
                    <MdButton> <Text bold color="#333">면 · 양념 · 오일</Text> </MdButton>
                </Grid>
                <Grid flex_center>
                    <MdButton> <Text bold color="#333">생수 · 음료 · 우유 · 커피</Text> </MdButton>
                    <MdButton> <Text bold color="#333">간식 · 과자 · 떡</Text> </MdButton>
                    <MdButton> <Text bold color="#333">베이커리 · 치즈 · 델리</Text> </MdButton>
                    <MdButton> <Text bold color="#333">건강식품</Text> </MdButton>
                    <MdButton> <Text bold color="#333">생활용품 · 리빙</Text> </MdButton>
                    <MdButton> <Text bold color="#333">뷰티 · 바디케어</Text> </MdButton>
                    <MdButton> <Text bold color="#333">주방용품</Text> </MdButton>
                </Grid>
                <Grid flex_center>
                    <MdButton> <Text bold color="#333">가전제품</Text> </MdButton>
                    <MdButton> <Text bold color="#333">베이비 · 키즈</Text> </MdButton>
                    <MdButton> <Text bold color="#333">반려동물</Text> </MdButton>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const MdButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0px 20px 0px;
    margin: 0 5px 20px;
    border: 1px solid #f7f7f6;
    border-radius: 20px;
    background-color: #f7f7f7;
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;

`;

export default Md;