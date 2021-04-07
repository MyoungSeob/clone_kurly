import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "redux/configStore";
import Home from "pages/Home";
import Login from "pages/Login";
import SignUp from 'pages/SignUp';
<<<<<<< HEAD
import ProdDetailinfo from 'pages/ProdDetailinfo';
=======
import ProdDetail from 'pages/ProdDetail'
>>>>>>> 2c7b30d77f364abea16f6a42325687a1774c8a76



function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={SignUp}/>
<<<<<<< HEAD
        <Route path="/proddetailinfo" exact component={ProdDetailinfo}/>
      </ConnectedRouter>      
=======
        <Route path="/proddetail" exact component={ProdDetail}/>
        <Route path="/proddetail/:id" exact component={ProdDetail}/>
      </ConnectedRouter>     
>>>>>>> 2c7b30d77f364abea16f6a42325687a1774c8a76
    </React.Fragment>
  );
}

export default App;
