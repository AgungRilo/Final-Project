import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children,  value, type, name, id, className, placeholder, onClick}=this.props
        return ( 
            <div>
                <button type={type} value={value} id={id} name={name} className={className}  onClick={onClick}>{children}</button>
            </div>
         );
    }
}
 
export default Button;