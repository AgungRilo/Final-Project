import React, { Component } from 'react';

class Tambah extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children, dataToogle, dataTarget, value, type, name, id, className, onClick}=this.props
        return ( 
            <div className="card-header">
                <button data-toggle={dataToogle} data-target={dataTarget} type={type} value={value} id={id} name={name} className={className}  onClick={onClick}>{children}</button>
            </div>
         );
    }
}
 
export default Tambah;