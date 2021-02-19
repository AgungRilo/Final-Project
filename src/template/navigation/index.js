import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Menu } from "../../component"
import { connect } from 'react-redux';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { changePage } = this.props
        console.log(this.props.user.isLogin)
        return (
            <div>
               {
                    this.props.user.isLogin &&
                    <Link to="/home">
                        <Menu redirect={() => changePage("home")}>Home</Menu>
                    </Link>

                 }
                {
                    this.props.user.flagPage !== "LOGIN_REGIS" &&
                    <>
                         <Link to="/register">
                             <Menu redirect={() => changePage("register")}>Register</Menu>
                         </Link>
                        <Link to="/">
                            <Menu redirect={() => changePage("login")}>Login</Menu>
                        </Link>
                     </>
                 }
            </div>
        );
    }
}

const mapStateToProps = state => ({


    user: state.AReducer.userLogin

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);