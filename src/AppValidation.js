import React, { Component } from 'react';
import { Validation } from './template';
import {BrowserRouter as Router} from 'react-router-dom';

class AppValidation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    
      
    render() { 
        return ( 
            <Router>
                <Validation/>
            </Router>
         );
    }
}
 
export default AppValidation;