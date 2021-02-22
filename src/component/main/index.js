import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children}=this.props
        return ( 
            <main>{children}</main>
         );
    }
}
 
export default Main;