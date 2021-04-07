import React from 'react';
import ProdInfo from 'components/ProdInfo'
import Header from 'components/Header';
import Footer from 'components/Footer';
import styled from 'styled-components';
import Image from 'elements/Image';
import { useSelector, useDispatch } from 'react-redux';
import {actionCreators as prodActions} from 'redux/modules/prod'


const ProdDetail =(props)=>{
    const dispatch = useDispatch();

    const prod_list = useSelector((state) => state.prod.list);

    React.useEffect(() => {
        dispatch(prodActions.loadProdDB())
    }, [])
    return (
      <React.Fragment>
        <Header />
        {prod_list.map((c, idx) => {
            return <ProdInfo key={c.id} {...c}/>
        })}
        <Footer />
      </React.Fragment>
    );
}


export default ProdDetail