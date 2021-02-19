import React, { Component } from 'react';

class P extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children}=this.props
        return ( 
            <p>{children}</p>
         );
    }
}
 
export default P;