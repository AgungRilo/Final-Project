import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Menu } from "../../component"


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { changePage } = this.props

    return (
      <>

        <div>

          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-brand" > Penyaluran Bantuan Bencana Alam</div>

                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">

                </form>
                {/* Navbar*/}
                <ul className="navbar-nav ml-auto ml-md-0">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                    <div 
                    className="dropdown-menu dropdown-menu-right" 
                    aria-labelledby="userDropdown">

                      <a className="dropdown-item" href="login.html">Logout</a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                  <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                      <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <Link to="/">
                          <div className="nav-link" >

                            <div className="sb-nav-link-icon">
                              <i className="fas fa-tachometer-alt" />
                            </div>Dashboard</div>
                        </Link>
                        <div className="sb-sidenav-menu-heading">Interface</div>
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                          <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>Master
              <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                        </a>
                        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                          <nav className="sb-sidenav-menu-nested nav">
                            <Link to="/bencana">
                              <div className="nav-link">Bencana</div>
                            </Link>
                            <Link to="/provinsi">
                              <div className="nav-link" >Provinsi</div>
                            </Link>
                            <Link to="/kota">
                              <div className="nav-link" >Kota</div>
                            </Link>
                            <Link to="/kecamatan">
                              <div className="nav-link" >Kecamatan</div>
                            </Link>
                            <Link to="/kelurahan">
                              <div className="nav-link" >Kelurahan</div>
                            </Link>
                            <Link to="/bantuan">
                              <div className="nav-link" >Bantuan</div>
                            </Link>
                          </nav>
                        </div>
                        <Link to="/kegiatan">
                          <div className="nav-link" >
                            <div className="sb-nav-link-icon"><i className="fas fa-book-open" />
                            </div>Kegiatan
                        </div>
                        </Link>
                        <Link to="/laporan">
                          <div className="nav-link" >
                            <div className="sb-nav-link-icon"><i className="fas fa-book" />
                            </div>Laporan
                        </div>
                        </Link>
                      </div>
                    </div>
                    <div className="sb-sidenav-footer">

                    </div>
                  </nav>

                </div>
              </div>
            </div>
          </div>
        </div>



      </>
    );
  }
}

export default Nav;