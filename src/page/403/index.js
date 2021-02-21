import React, { Component } from 'react';
import {Button} from '../../component';
import P from '../../component/p';
import {Footer} from '../../template';

class Error extends Component {
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
                            <P><i className="fa fa-exclamation-triangle fa-5x"></i><br />Status Code: 403</P>
                        </div>
                        <div className="col-md-10">
                            <h3>OPPSSS!!!! Sorry...</h3>
                            <P>Sorry, your access is refused due to security reasons of our server and also our sensitive data.<br />Please go back to the previous page to continue browsing.</P>
                            <Button className="btn btn-warning" onClick={() => this.props.history.push("/")}>Go Back</Button>
                        </div>
                    </div>
                </div>

                <Footer/>
                </>
        );
    }
}

export default Error;