import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import {Bencana} from '../../page';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Switch>
                <Route exact path="/" component={props =>   <Home {...props} />}/>
                <Route path="/bencana" component={props => <Bencana {...props} />} />
            </Switch>
         );
    }
}
 
export default Content;