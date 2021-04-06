import React from "react";
import styled from "styled-components"
import Grid from "elements/Grid";
import Text from "elements/Text";

const LoginBox = (props) => {
    const {placeholder, margin, type, _onChange} = props;

    const styles = {
       margin: margin,
    };

    return (
        <React.Fragment>
            
            <ElLoginBox {...styles} onChange={_onChange} type={type} placeholder={placeholder}></ElLoginBox>
            
        </React.Fragment>
    )
}

LoginBox.defaultProps = {
    margin: false,
    placeholder: '텍스트를 입력해주세요.',
    type : false,
    _onChange : () => {}
}

const ElLoginBox = styled.input`
    border-radius: 3px;
    border: 1px solid #ccc;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    width: 100%;
    max-width: 100%;
    height: 54px;
    padding: 0px 19px;
    box-sizing: border-box;
    letter-spacing: -.05em;
    
`;


export default LoginBox;