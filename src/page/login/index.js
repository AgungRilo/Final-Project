import React, { Component } from 'react';
import { connect } from 'react-redux';
import login from '../../asset/login.png';
import {Label,Input} from '../../component';

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
            alert("Login Sukses")
            this.props.submitLogin( {user: find1[0], page:"HOME"} )
            this.props.history.push("/home")
        } else {
            alert("gagal")
        }
        // e.preventDefault()
    }
    // componentDidMount(){
    //     this.setState({
    //         ...this.state
    //     });
    //     this.props.movePage({page:"LOGIN_REGIS"})
    // }
    render() {
        return (
            <div className="login">

            <div className="container">
                
                <img src={login}/>
                <div className="div-group">
                    <Label >Username</Label>
                    <Input type="text" className="form-control" name="username" placeholder="Enter email"  onChange={this.setValue}/>
                    
                </div>
                <div className="form-group">
                    <Label >Password</Label>
                    <Input type="password" className="form-control" name="password" placeholder="Password"  onChange={this.setValue}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={() => this.props.history.push("/error")}>Sign In</button>

                <button type="submit" id="register" className="btn btn-primary" onClick={() => this.props.history.push("/register")}>Register</button>

            </div>
            </div>

        );
    }
}

//ketika mengambil data dari luar kelas
const mapStateToProps = state => ({
    dataUser: state.UReducer.users,
    user: state.AReducer.userLogin

})
//mengubah data kereducer
const mapDispatchToProps = dispatch => ({
    submitLogin: (data) => dispatch({ type: "LOGIN_SUCCESS",payload:data }),
    movePage: (data) => dispatch({ type: "MOVE_PAGE",payload:data }),
})

export default (connect(mapStateToProps, mapDispatchToProps))(Login);