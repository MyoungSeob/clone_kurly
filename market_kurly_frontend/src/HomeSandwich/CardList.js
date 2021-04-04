import React from 'react';
import styled from 'styled-components'
import Grid from 'elements/Grid'
import Card from 'HomeSandwich/Card'

const CardList = (props) => {
  return (
    <React.Fragment>
      <Title>
          <H><Span>이 상품 어때요?</Span></H>
          </Title>
      <Grid is_flex>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </React.Fragment>
  );
};

const Title = styled.div`
    padding : 79px 0 35px;
`
const H = styled.h3`
    font-weight : 700;
    font-size : 28px;
    line-height : 32px;
    letter-spacing : -0.3px;
    text-align : center;
`
const Span = styled.span`
    position : relative;
    font-weight : 700;
`
export default CardList;