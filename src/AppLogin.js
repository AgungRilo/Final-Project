import React, { Component } from 'react';
import './App.css';

import {Header,Footer,Nav,Validation,Content} from './template';
import { BrowserRouter as Router } from "react-router-dom";


class AppLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  

  render() {
    
    return (
    <Router>
      <Header/>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
      <Nav />
      </div >
      <Content />
      </div>
      
    </Router>
    );
    
  }
}

export default AppLogin;