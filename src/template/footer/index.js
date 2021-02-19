import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="fixed-bottom">
                    <div className="card-header">
                        Copyright@Agung G2Academy x NexSoft
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;