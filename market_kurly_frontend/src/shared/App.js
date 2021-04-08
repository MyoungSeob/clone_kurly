import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "redux/configStore";
import Home from "pages/Home";
import Login from "pages/Login";
import SignUp from 'pages/SignUp';

import ProdDetailinfo from 'pages/ProdDetailinfo';

import ProdDetail from 'pages/ProdDetail'

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={SignUp}/>


        <Route path="/proddetail" exact component={ProdDetail}/>
        <Route path="/proddetail/:id" exact component={ProdDetail}/>
        <Route path="/proddetailinfo" exact component={ProdDetailinfo}/>
      </ConnectedRouter>     

    </React.Fragment>
  );
}

export default App;
