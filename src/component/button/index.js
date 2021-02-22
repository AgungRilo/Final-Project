import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children, dataToogle, dataTarget, value, type, name, id, className, dataDismiss, onClick}=this.props
        return ( 
            <div>
                <button data-toggle={dataToogle} data-target={dataTarget} type={type}  data-dismiss={dataDismiss} value={value} id={id} name={name} className={className}  onClick={onClick}>{children}</button>
            </div>
         );
    }
}
 
export default Button;