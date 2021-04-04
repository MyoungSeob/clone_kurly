import React from "react";
import styled from "styled-components"
import Grid from "elements/Grid";
import Text from "elements/Text";

const Input = (props) => {
    const {label, border, placeholder, _onChange, width, height, type, multiline, value, is_submit, onSubmit} = props;

    const styles = {
        width: width,
        height: height,
        border: border,
    };

    if(multiline){
        return (
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                <ElTextarea value={value} rows={10} placeholder={placeholder} onChange={_onChange}></ElTextarea>
            </Grid>
        )
    }
    return (
        <React.Fragment>
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                {is_submit? <ElInput {...styles} onKeyPress={(e) => {if(e.key === "Enter"){onSubmit(e);}}} value={value} type={type} placeholder={placeholder} onChange={_onChange}/> : <ElInput type={type} placeholder={placeholder} onChange={_onChange}/>}
                
            </Grid>
        </React.Fragment>
    )
}

Input.defaultProps = {
    multiline: false,
    label: false,
    placeholder: '텍스트를 입력해주세요.',
    type: "text",
    value: "",
    is_submit: false,
    width: false,
    height: false,
    border: false,
    onSubmit: () => {},
    _onChange: () => {}
}

const ElTextarea = styled.textarea`
    border-radius: 6px;
    border: 1px solid #e3e3e3;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;

const ElInput = styled.input`
    display: inline-block;
    border-radius: 18px;
    margin: 0;
    // max-width: 100%;
    padding: 0 60px 0 14px;
    ${(props) => (props.border ? `border: ${props.border};` : "")}
    ${(props) => (props.height ? `height: ${props.height};` : "")}
    ${(props) => (props.width ? `width: ${props.width};` : "")}
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    outline: none;
    color: #666;
    box-sizing: border-box;
    background-color: #f7f7f7;
    text-align: start;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;

`;

export default Input;