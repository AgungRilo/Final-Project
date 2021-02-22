import React, { Component } from 'react';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { value,pattern, type, name, id, className, placeholder, onChange} = this.props
        return ( 
            
                <input pattern={pattern} type={type} value={value} id={id} name={name} className={className} placeholder={placeholder} onChange={onChange} />
            
         );
    }
}
 
export default Input;