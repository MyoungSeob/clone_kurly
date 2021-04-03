import React from "react";
import styled from "styled-components"

const Grid = (props) => {

    const {is_flex, flex_end, size, width, padding, margin, bg, children, center, _onClick} = props;

    const styles = {
        is_flex: is_flex,
        flex_end: flex_end,
        width: width,
        margin: margin,
        padding: padding,
        bg: bg,
        center: center,
        size: size,
    };

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
    is_flex: false,
    flex_end: false,
    width: "100%",
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
    box-sizing: border-box;
    ${(props) => (props.size ? `font-size: ${props.size};` : "")}
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
    ${(props) => (props.center ? `text-align: center;` : "")}
`

export default Grid;