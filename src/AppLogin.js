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

  goToPage = page =>{
    this.setState({
      currentPage:page
    })
  }

  render() {
    
    return (
    <Router>
      <Header/>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
      <Nav page={this.state.currentPage} changePage ={this.goToPage}/>
      </div >
      <Content page={this.state.currentPage}/>
      </div>
      {/* <Footer/> */}
    </Router>
    );
    
  }
}

export default AppLogin;