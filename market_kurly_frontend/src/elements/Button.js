import React from "react";
import styled from "styled-components"

const Button = (props) => {
    const {text, size, bold, _onClick, margin, is_float, is_round, children, height, width, padding, color, border, background} = props;

    const styles = {
        margin: margin,
        height: height,
        width: width,
        padding: padding,
        color:color,
        border:border,
        background: background,
        bold:bold,
        size:size,
    };
    if(is_float) {
        return (
            <React.Fragment>
                <FloatButton onClick={_onClick}>{text? text : children}</FloatButton>
            </React.Fragment>
        )
    }
    if(is_round) {
        return (
            <React.Fragment>
                <RoundButton {...styles} onClick={_onClick}>{text? text : children}</RoundButton>
            </React.Fragment>
        )
    }


    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>{text? text : children}</ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text: false,
    children: null,
    _onClick: () => {},
    margin: false,
    is_float: false,
    is_round: false,
    height: false,
    width: '100%',
    padding: false,
    color: false,
    border: false,
    background: false,
    bold: false,
    size: false,
}
const RoundButton = styled.button`
    ${(props) => (props.bold ? `font-weight: ${props.bold};` : "")}
    ${(props) => (props.size ? `font-size: ${props.size};` : "")}
    ${(props) => (props.color ? `color: ${props.color};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.height ? `height: ${props.height};` : "")}
    ${(props) => (props.border ? `border: ${props.border}; border-radius: 30px;` : "")}

`

const ElButton = styled.button`
    width: ${(props) => props.width};
    background-color: ${(props) => props.background};
    
    color: ${(props) => props.color};

    padding: ${(props) => props.padding};
    font-size: 12px;
    box-sizing: border-box;
    border: none;
    &:hover {
        border: none;
    }
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold ? "600" : "400")};
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.height ? `height: ${props.height};` : "")}
    ${(props) => (props.border ? `border: ${props.border}; border-radius: 30px;` : "")}
`;

const FloatButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: #4046FF; //#0597F2
    color: #ffffff;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 16px;
    position: fixed;
    bottom: 50px;
    right: 16px;
    text-align: center;
    border: none;
    border-radius: 50px;
    vertical-align: middle;
`;

export default Button;