import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import {Bencana,Provinsi,Kota, Kecamatan} from '../../page';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage:""
         }
    }

    goToPage = page =>{
        this.setState({
          currentPage:page
        })
      }

    render() { 
        return ( 
            <Switch>
                <Route exact path="/" component={props =>   <Home {...props} />}/>
                <Route path="/bencana" component={props => <Bencana {...props} />} />
                <Route path="/provinsi" component={props => <Provinsi {...props} />} />
                <Route path="/kota" component={props => <Kota {...props} />} />
                <Route path="/kecamatan" component={props => <Kecamatan {...props} />} />
            </Switch>
         );
    }
}
 
export default Content;