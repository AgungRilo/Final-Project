import React, { Component } from 'react';
import { connect } from 'react-redux';
import login from '../../asset/login.png';
import {Label,Input,Button,Img} from '../../component';
import {Redirect} from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })

    }
    doLogin = () => {

        const { username, password } = this.state
        const { dataUser } = this.props
        let find = dataUser.filter(users => {
            return users.username === username && users.password === password
        })
        let find1 = dataUser.filter(users => {
            return users.username === username 
        })
        console.log("find1",find1[0]);
        console.log("find", find);

        if (find.length > 0) {
            
            this.props.submitLogin( {user: find1[0]} )
            this.props.history.push("/")
        } else {
            alert("Username atau password salah")
            this.props.history.push("/error")
        }
        // e.preventDefault()
    }
   
    render() {
        if (this.props.isLogin) {
            return <Redirect to="/" />
        }
        return (
            <div className="login">

            <div className="container">
                
                <Img id="login" src={login}/>
                <div className="div-group">
                    <Label >Username</Label>
                    <Input type="text" className="form-control" name="username" placeholder="Enter email"  onChange={this.setValue}/>
                    
                </div>
                <div className="form-group">
                    <Label >Password</Label>
                    <Input type="password" className="form-control" name="password" placeholder="Password"  onChange={this.setValue}/>
                </div>

                <Button type="submit" className="btn btn-primary" onClick={() => this.doLogin()}>Sign In</Button>

                

            </div>
            </div>

        );
    }
}

//ketika mengambil data dari luar kelas
const mapStateToProps = state => ({
    checkLogin: state.AReducer.isLogin,
    dataUser: state.UReducer.users,
    user: state.AReducer.userLogin

})
//mengubah data kereducer
const mapDispatchToProps = dispatch => ({
    submitLogin: (data) => dispatch({ type: "LOGIN_SUCCESS",payload:data }),
    
})

export default (connect(mapStateToProps, mapDispatchToProps))(Login);