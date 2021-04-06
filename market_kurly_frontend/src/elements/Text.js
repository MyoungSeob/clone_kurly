import React from "react";
import styled from "styled-components"

const Text = (props) => {

    const {bold, color, height, size, margin, children, center, width, _onClick} = props;

    const styles = {
        bold: bold,
        color: color,
        size: size,
        margin:margin,
        center:center,
        height:height,
        width:width,
    };

    return (
        <P {...styles} onClick={_onClick}>
            {children}
        </P>
    )
}

Text.defaultProps = {
    children: null,
    bold: false,
    color: '#222831',
    size: '14px',
    margin: false,
    center: false,
    width : false,
    height : false,
    _onClick: () => {},
}

const P = styled.p`
    color: ${(props) => props.color};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    text-align: ${(props) => props.center};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold ? "600" : "400")};
    ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
`

export default Text;