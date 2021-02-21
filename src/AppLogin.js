import React, { Component } from 'react';
import './App.css';

import {Header,Footer,Nav,Validation,Content} from './template';
import { BrowserRouter as Router } from "react-router-dom";
import {Error} from './page';
import {connect} from 'react-redux';

class AppLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentPage:"home"
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
      {/* <Footer/> */}
    </Router>
    );
    
  }
}

export default AppLogin;