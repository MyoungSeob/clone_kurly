import React from 'react';
import styled from 'styled-components';

const Image =(props)=>{
    const {shape, src, width, height, img} = props;
    const styles = {
        src : src,
        width : width,
        height : height,
    }

    if(img){
        return (
            <React.Fragment>
                <ProdImg {...styles}></ProdImg>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <PordImage {...styles}></PordImage>
        </React.Fragment>
    )
}
Image.defaultProps = {
    shape : "rectangle",
    src : "https://img-cf.kurly.com/shop/data/goods/1572590631750l0.jpg",
    width : "249px",
    height : "320px", 
    img: false,
};



const ProdImg = styled.div`
    width: 60px;
    height: 78px;
    max-width: 100%;
    display: inline-block;
    text-align: center;
    text-transform: none;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
    background-color: #fff;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    margin: 0 20px 0 0;
    padding: 0;
    &: hover {
      cursor : pointer;
    }
`

const PordImage = styled.div`
background-image : url("${(props) => props.src}");
display : block;
margin : 0 auto;
background-position : 50% 50%;
background-size : cover;
width : ${(props) => props.width};
height : ${(props) => props.height};
`
export default Image;