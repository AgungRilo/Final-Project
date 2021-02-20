import React, { Component } from 'react';
import './App.css';

import {Header,Footer,Nav,Validation,Content} from './template';
import { BrowserRouter as Router } from "react-router-dom";
import {Error} from './page';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  goToPage = page =>{
    this.setState({
      currentPage:"home"
    })
  }

  render() {
    if (this.props.checkLogin === true) {
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
    }else{
      return(
        <Router>  
          <Validation/>
        </Router>
      )
    }
  }
}

const mapStateToProps = state => ({
  checkLogin: state.AReducer.isLogin,
  dataUser: state.UReducer.users,
  user: state.AReducer.userLogin

})
//mengubah data kereducer
const mapDispatchToProps = dispatch => ({
  submitLogin: (data) => dispatch({ type: "LOGIN_SUCCESS",payload:data }),
  
})

export default (connect(mapStateToProps, mapDispatchToProps))(App);