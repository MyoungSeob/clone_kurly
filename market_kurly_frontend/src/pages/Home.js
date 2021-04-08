import React from "react";
import Header from "components/Header";
import Md from "HomeSandwich/Md";
import CardList from "HomeSandwich/CardList";
import CardListAl from "HomeSandwich/CardListAl";
import Footer from "components/Footer";
import AdList from "HomeSandwich/AdList";

const Home = (props) => {

    return (
        <React.Fragment>
            <Header></Header>
            <AdList></AdList>
            <CardList></CardList>
            <Md></Md>
            <CardListAl></CardListAl>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Home;