import React from 'react';
import styled from 'styled-components';

const Image =(props)=>{
    const {shape, src, width, height} = props;
    const styles = {
        src : src,
        width : width,
        height : height,
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
};

const PordImage = styled.div`
background-image : url("${(props) => props.src}");
display : block;
margin : 0 auto;
background-position : 50% 50%;
background-size : cover;
width : 249px;
height : 320px;
`
export default Image;