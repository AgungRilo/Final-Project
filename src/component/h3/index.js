import React, { Component } from 'react';

class H3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children} = this.props
        return ( 
            <h3>{children}</h3>
         );
    }
}
 
export default H3;