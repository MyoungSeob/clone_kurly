import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import CartList from "components/CartList";

const Cart = (props) => {

    return (
        <React.Fragment>
            <Header></Header>
            <CartList></CartList>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Cart;