import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-brand" >Aplikasi Penyaluran Bantuan Bencana Alam </div>
                    
                    {/* Navbar Search*/}
                    <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                       
                    </form>
                    {/* Navbar*/}
                    <ul className="navbar-nav ml-auto ml-md-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">Admin</a>
                                <div className="dropdown-divider" />
                                <Link to="/logout">
                                <div className="dropdown-item"  onClick={this.props.logoutEvent} >Logout</div>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>

            </>

        );
    }
}

//ketika mengambil data dari luar kelas
const mapStateToProps = state => ({
    

})
//mengubah data kereducer
const mapDispatchToProps = dispatch => ({
    logoutEvent: () => dispatch({ type: "LOGOUT_SUCCESS" }),
    
})

export default (connect(mapStateToProps, mapDispatchToProps))(Header);