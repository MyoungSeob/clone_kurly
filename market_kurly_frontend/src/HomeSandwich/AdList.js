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

    const settings = {
        dots: false,
        arrows : true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const dispatch = useDispatch();
    
      const ad_list = useSelector((state) => state.ad.list);
     
      React.useEffect(() => {
        dispatch(adActions.loadAdDB())

      }, []);
 console.log(ad_list)

    return (
      <React.Fragment>
        <Slider {...settings}>
            {ad_list.map((c, idx) => {
                return (
                  <ImageBox>
                    <Image key={c.id} width="100%" height="370px" src={c.img} {...c}></Image>
                  </ImageBox>
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