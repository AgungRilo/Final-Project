import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import {Bencana,Provinsi,Kota, Kecamatan, Kelurahan, Bantuan,Kegiatan, Laporan, Detail} from '../../page';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    }

    render() { 
        return ( 
            <Switch>
                <Route exact path="/" component={props =>   <Home {...props} />}/>
                <Route path="/bencana" component={props => <Bencana {...props} />} />
                <Route path="/provinsi" component={props => <Provinsi {...props} />} />
                <Route path="/kota" component={props => <Kota {...props} />} />
                <Route path="/kecamatan" component={props => <Kecamatan {...props} />} />
                <Route path="/kelurahan" component={props => <Kelurahan {...props} />} />
                <Route path="/bantuan" component={props => <Bantuan {...props} />} />
                <Route path="/kegiatan" component={props => <Kegiatan {...props} />} />
                <Route path="/laporan" component={props => <Laporan {...props} />} />
                <Route path="/detail/:namaB" component={props => <Detail {...props} />} />
            </Switch>
         );
    }
}
 
export default Content;