import React from "react";
import styled from "styled-components"

const Grid = (props) => {

    const {is_Md, is_flex, flex_start, flex_end, flex_center, size, width, height, padding, margin, bg, children, center, _onClick} = props;

    const styles = {
        is_flex: is_flex,
        flex_start: flex_start,
        flex_end: flex_end,
        flex_center: flex_center,
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        bg: bg,
        center: center,
        size: size,
        is_Md: is_Md,
    };

    if(is_Md) {
        return (
            <React.Fragment>
                <MdButton {...styles} onClick={_onClick}> {children} </MdButton>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <GridBox {...styles} onClick={_onClick}>
                {children}
            </GridBox>
        </React.Fragment>
    )
}

Grid.defaultProps = {
    children: null,
    is_Md: false,
    is_flex: false,
    flex_start: false,
    flex_end: false,
    flex_center: false,
    width: "100%",
    height: false,
    padding: false,
    margin: false,
    bg: false,
    center: false,
    size: false,
    _onClick: () => {},
}

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: 100%;
    position: relative;
    box-sizing: border-box;
    ${(props) => (props.size ? `font-size: ${props.size};` : "")}
    ${(props) => (props.height ? `height: ${props.height};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    
    ${(props) => 
        props.is_flex
            ? `display: flex; align-items: center; justify-content: space-between;`
            : ""}
    ${(props) => 
        props.flex_end
            ? `display: flex; align-items: center; justify-content: flex-end;`
            : ""}
    ${(props) => 
        props.flex_start
            ? `display: flex; align-items: center; justify-content: flex-start;`
            : ""}
    ${(props) => 
        props.flex_center
            ? `display: flex; align-items: center; justify-content: center; `
            : ""}
    ${(props) => (props.center ? `text-align: center;` : "")}
`

const MdButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: cente
    flex-wrap: wrap;
    align-content: center;
    ${(props) => (props.height ? `height: ${props.height};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Grid;