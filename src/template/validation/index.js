import React, { Component } from 'react';
import {Login, LogOut} from '../../page';
import Home from '../home';
import { Switch, Route } from "react-router-dom";
import {Error} from '../../page';

class Validation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <Switch>
            <Route path="/" exact component={props => <Login {...props} />} />
            <Route path="/error" component={props => <Error {...props} />} />
            <Route path="/logout" component={props => <LogOut {...props}/>}/>
        </Switch>
         );
    }
}
 
export default Validation;