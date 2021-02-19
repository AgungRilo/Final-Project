import React, { Component } from 'react';


class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children}=this.props
        return ( 
            
                <label>{children}</label>
            
         );
    }
}
 
export default Label;
