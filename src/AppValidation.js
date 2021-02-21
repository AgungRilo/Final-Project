import React, { Component } from 'react';
import { Validation } from './template';
import {BrowserRouter as Router} from 'react-router-dom';

class AppValidation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage:"login"
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
                <Validation page={this.state.currentPage}/>
            </Router>
         );
    }
}
 
export default AppValidation;