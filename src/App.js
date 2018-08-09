import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import ListToko from "./components/ListToko";
import Tabbar from './components/Tabbar'
import { Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import List from "./components/List";



class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact={true} component={Tabbar} />
          <Route path='/makanan' component={List} />
        </Switch>

      </div>
    );
  }
}

export default App;
