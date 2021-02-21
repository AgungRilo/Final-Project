import React, { Component } from 'react';
import {Button} from '../../component';
import P from '../../component/p';
import { Footer } from '../../template';

class LogOut extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="container py-5" id="page">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <P><i className="fa fa-sign-out-alt fa-5x"></i><br />Status Code: Sign Out</P>
                        </div>
                        <div className="col-md-10">
                            <h3>Thank You...</h3>
                            <P>For visiting our website <br />Please go back to the previous page to continue browsing.</P>
                            <Button className="btn btn-primary" onClick={() => this.props.history.push("/")}>Go to Login</Button>
                        </div>
                    </div>
                </div>
                    <Footer/>
               </>
        );
    }
}

export default LogOut;