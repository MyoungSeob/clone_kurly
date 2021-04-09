import React from 'react';
import ProdInfo from 'components/ProdInfo'
import Header from 'components/Header';
import Footer from 'components/Footer';
import styled from 'styled-components';
import Image from 'elements/Image';
import { useSelector, useDispatch } from 'react-redux';
import {actionCreators as prodActions} from 'redux/modules/prod';


const ProdDetail =(props)=>{

const id = props.match.params.id;
// 현재 제품상세페이지의 id값을 나타냅니다.

    const dispatch = useDispatch();

    const prod_list = useSelector((state) => state.prod.list)
    
    React.useEffect(() => {
        dispatch(prodActions.loadProdDB(id))
        // 현재 id값을 함께 보내서 가져오는 정보는 id에 맞는 정보만 가져오도록 합니다.
    }, [])

    return (
      <React.Fragment>
        <Header />
        <ProdInfo {...prod_list}></ProdInfo>
        {/* 아이디에 맞는 정보들을 ProdInfo에 적용합니다. */}
        <Footer />
      </React.Fragment>
    );
}


export default ProdDetail