import React from 'react';
import Image from 'elements/Image'
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Grid from 'elements/Grid';
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as adActions} from "redux/modules/ad";

const AdList = (props) => {
  // 광고목록은 react-slick이란 캐로셀 라이브러리를 이용하여 만들었습니다.
    const settings = {
        dots: false,
        arrows : true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      // 케로셀 라이브러리인 Slider의 세팅값입니다.
      const dispatch = useDispatch();
    
      const ad_list = useSelector((state) => state.ad.list);
     
      React.useEffect(() => {
        dispatch(adActions.loadAdDB())
      }, []);
      // 광고목록을 불러오는 함수입니다.
 console.log(ad_list)

    return (
      <React.Fragment>
        <Slider {...settings}>
            {ad_list.map((c, idx) => {
                return (
                  <ImageBox>
                    <Image key={c.id} width="100%" height="370px" src={c.img} {...c}></Image>
                  </ImageBox>
                  // map을 통하여 하나하나의 목록을 만들고, src에도 c.img를 넣어 아이디에 맞는 img를 넣을 수 있도록 하였습니다.
                );
            })}
                        
        </Slider>
      </React.Fragment>
    );
}

AdList.defaultProps ={
    src : "https://img-cf.kurly.com/shop/data/goods/147918052537l0.jpg"
}

const ImageBox = styled.div`
  max-width : 100%;
  text-align : center;
  float : left;
  display : flex;
  background-position : 50% 50%;
  margin : 0;

`

export default AdList;