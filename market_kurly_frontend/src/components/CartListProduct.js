import React, {useState, useRef} from "react";
import styled from "styled-components"
import Grid from "elements/Grid";
import Text from "elements/Text";
import Image from "elements/Image";
import {history} from "redux/configStore";
import { useSelector, useDispatch } from 'react-redux';
import {actionCreators as cartActions} from 'redux/modules/cart';


const CartListProduct = (props) => {
    const dispatch = useDispatch();

    // const {id, nums, product} = props;
    const [number, setNumber] = useState(`${props.nums}`);
    
    const plus = () => {
        let num = parseInt(number) + 1;
        console.log(typeof(num))
        setNumber(num);
        
    }

    const minus = () => {
        setNumber(number > 0? number - 1 : 0);

    }

    

    return (
        <React.Fragment>
            <Grid is_flex width="100%" minHeight="128px" borderTop="1px solid #949494">
                <Grid flex_start>
                    
                    <BtnCheck ></BtnCheck>
                    <Image src={props.product.main_image_url} img_></Image>
                    <Text bold size="15px">{props.product.name}</Text>
                </Grid>
                
                <Grid flex_end>
                    <SpanBox>
                        <BtnMinus onClick={minus}></BtnMinus>
                        <InputBox >{number}</InputBox>
                        <BtnPlus onClick={plus}></BtnPlus>
                    </SpanBox>
                    <Text center="right" size="16px" bold width="82px" >{(number * props.product.original_price).toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                    <Del onClick={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch(cartActions.deleteProdDB(props.id))
                    }}></Del>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

CartListProduct.defaultProps = {
    id: null,
    product: {
        id: "",
        title: "",
        sales: "",
        priceSell: "",
        priceOrigin: "",
        img: "",
        unit: "",
        weight: "",
        delivery: "",
        con_origin: "",
        pack: "",
        info: "",
        nums: "",
        category: "",
    },
    nums: "",
};


const BtnCheck = styled.button`
    width: 24px;
    height: 24px;
    max-width: 100%;
    display: inline-block;
    text-align: center;
    text-transform: none;
    background-image: url("https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg");

    background-size: cover;
    background-position: center;
    background-color: #fff;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    margin: 0 30px 0 0;
    padding: 0;
    &: hover {
    cursor : pointer;
    }   

`



const Del = styled.button`
    width: 30px;
    height: 30px;
    max-width: 100%;
    display: inline-block;
    text-align: center;
    text-transform: none;
    background-image: url("https://res.kurly.com/pc/service/cart/2007/ico_delete.svg");
    background-size: 30px 30px;
    background-position: center;
    background-color: #fff;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    margin: 0 0 0 16px;
    padding: 0;
    &: hover {
      cursor : pointer;
    }
`

const BtnMinus = styled.button`
    width: 28px;
    height: 28px;
    max-width: 100%;
    display: inline-block;
    text-align: center;
    text-transform: none;
    background-image: url("https://res.kurly.com/pc/ico/2010/ico_minus_on.svg");
    background-size: 30px 30px;
    background-position: center;
    background-color: #fff;
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    &: hover {
      cursor : pointer;
    }
`

const BtnPlus = styled.button`
    width: 28px;
    height: 28px;
    max-width: 100%;
    display: inline-block;
    text-align: center;
    text-transform: none;
    background-image: url("https://res.kurly.com/pc/ico/2010/ico_plus_on.svg");
    background-size: 30px 30px;
    background-position: center;
    background-color: #fff;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    &: hover {
      cursor : pointer;
    }
`

const InputBox = styled.p`
    
    width: 28px;
    height: 20px;
    margin: 5px 0 0;
    // margin-right: -1px;
    padding: 0;
    border: 0;
    background-color: #fff;
    font-size: 14px;
    color: #000;
    line-height: 18px;
    text-align: center;
    max-width: 100%;
    box-sizing: border-box;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline;
    cursor: text;
`

const SpanBox = styled.button`
    overflow: hidden;
    display: flex;

    float: left;
    width: 85px;
    height: 30px;
    border: 1px solid #dddfe1;
    border-radius: 3px;
    background-color: #fff;
    color: #333;
    letter-spacing: 0;
    box-sizing: border-box;
    margin: 0 50px 0 0;
    padding: 0;
`

export default CartListProduct;