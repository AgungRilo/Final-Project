import React, { Component } from 'react';

class Img extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {id, src} = this.props
        return ( 
            <img id={id} src={src}/>
         );
    }
}
 
export default Img;