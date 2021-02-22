import React, { Component } from 'react';

class I extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {className, children}= this.props
        return (
            <i className={className}>{children}</i>
          );
    }
}
 
export default I;