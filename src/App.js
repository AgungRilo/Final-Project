import React, { Component } from 'react';
import './App.css';

import {Header,Footer,Nav,Validation,Content} from './template';
import { BrowserRouter as Router } from "react-router-dom";
import {Error} from './page';
import {connect} from 'react-redux';
import AppLogin from './AppLogin';
import {} from './template';
import AppValidation from './AppValidation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  showHomePage=()=>{
    if(this.props.checkLogin == true ){
      return <AppLogin/>
    }else{
      return <AppValidation/>
    }
  }
 

  render() {
    
    return (
      <>
    {this.showHomePage()}
    {/* <AppLogin/> */}
    </>
    );
    // }else{
      // return(
      //   <Router>  
      //     <Validation/>
      //   </Router>
      // )
  // }
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