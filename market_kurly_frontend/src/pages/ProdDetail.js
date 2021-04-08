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


// console.log(prod_res[0])

    const dispatch = useDispatch();

    const prod_list = useSelector((state) => state.prod.list)
    
    React.useEffect(() => {
        dispatch(prodActions.loadProdDB(id))
    }, [])
  


    // const _prod_list = prod_list[0] 
    // console.log(_prod_list)
    
    
    return (
      <React.Fragment>
        <Header />
        <ProdInfo {...prod_list}></ProdInfo>
        <Footer />
      </React.Fragment>
    );
}


export default ProdDetail