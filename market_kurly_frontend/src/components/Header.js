import React from "react";
import Grid from "elements/Grid";
import Button from "elements/Button";
import styled from "styled-components"

const Header = (props) => {

    return (
        <React.Fragment>
            <Grid padding="10px 30px">
                <Grid is_flex>
                    <Grid size="13px">
                        수도권 이외 지역 <Span>택배배송</Span>
                    </Grid>
                    <Grid flex_end padding="0px 0px 0px 8px">
                        <Grid flex_end width="60px" size="13px">
                            회원가입
                        </Grid >
                        <Grid flex_end width="60px" size="13px">
                            로그인
                        </Grid>
                        <Grid flex_end width="60px" size="13px">
                            고객센터
                        </Grid>
                    </Grid>
                </Grid>
                
                <div>
                    로고로고
                </div>

                <div>
                    <div>
                        메뉴바 로고 / 전체카테고리
                    </div>
                    <div>
                        신상품 / 베스트 / 알뜰쇼핑 / 금주혜택
                    </div>
                    <div>
                        검색창 / 지도 로고 / 장바구니 로고
                    </div>
                </div>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {

}

const Span = styled.span`
    color: purple;
    font-weight: bold;
`

export default Header;