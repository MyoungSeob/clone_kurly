import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "redux/configStore";
import Home from "pages/Home";



function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Home}/>
      </ConnectedRouter>      
    </React.Fragment>
  );
}

export default App;
