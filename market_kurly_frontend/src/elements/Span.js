import React from "react";
import styled from "styled-components"

const Span = (props) => {
    const {size, bold, color, children} = props;

    const styles = {
        size: size,
        bold: bold,
        color: color,
    };


    return (
        <React.Fragment>
            <Spans {...styles}>
               {children}
            </Spans>
        </React.Fragment>
    )
}

Span.defaultProps = {
    children: null,
    size: false,
    bold: false,
    color: false,
}

const Spans = styled.span`
    ${(props) => (props.size ? `font-size: ${props.size};` : "")}
    ${(props) => (props.bold ? `font-weight: ${props.bold};` : "")}
    ${(props) => (props.color ? `color: ${props.color};` : "")}    
`;

export default Span;