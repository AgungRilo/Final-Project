import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Label,Input,Button} from '../../component';
import register from '../../asset/login.png';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email:""
        }
    }
    // componentDidMount(){
        
    //     this.props.movePage({ page:"LOGIN_REGIS"} )
    // }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })

    }
    setRegister = el =>{
        let obj = this.state
        this.props.register(obj);
        el.preventDefault()
        this.hapus()
        alert("Berhasil Registrasi")
        this.props.history.push("/")
    }
    hapus = () => {
        this.setState({ 
            username:"",
            password:"",
            email:""
            })
    }
    render() {
        return (
            <div className="register">

            <div className="container">
                <img src={register}/>
                <div className="div-group">
                    <Label >Username</Label>
                    <Input type="text" className="form-control" name="username" value={this.state.username} placeholder="Enter email" onChange={this.setValue}/>
                </div>
                <div className="form-group">
                    <Label >Password</Label>
                    <Input type="password" className="form-control" name="password" value={this.state.password} placeholder="Password" onChange={this.setValue}/>
                </div>
                <div className="div-group">
                    <Label >Email address</Label>
                    <Input type="email" className="form-control" name="email" value={this.state.email}  placeholder="Enter email" onChange={this.setValue}/>
                </div>
                <div className="sign-up">

                <button type="submit" className="btn btn-primary" onClick={this.setRegister}>Sign Up</button>
                <button id="register" className="btn btn-primary" onClick={() => this.props.history.push("/")}>Kembali</button> 
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    dataUser:state.UReducer.users

})

const mapDispatchToProps = dispatch =>({
register:(data)=>dispatch({type:"REGISTER",payload:data}),
movePage:(data)=>dispatch({type:"MOVE_PAGE",payload:data})
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);