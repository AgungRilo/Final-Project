import React, { Component } from 'react';
import merapi from '../../asset/merapi.jpg';
import tsunami from '../../asset/tsunamii.jpg';
import longsor from '../../asset/longsor.jpg';
import banjir from '../../asset/banjir.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Dashboard</h1>

                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div>
                                        <img id="merapi" src={merapi} />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div>
                                        <img id="tsunami" src={tsunami} />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div>
                                        <img id="banjir" src={banjir} />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div>
                                        <img id="longsor" src={longsor} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6" id="tentang">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-user mr-1" /> Tentang Kami
                                        </div><div className="about">Aplikasi ini diciptakan untuk mengorganisir bantuan - bantuan bencana alam</div>
                                        <div className="card-body"></div>
                                    </div>
                                </div>
                                
                            </div>


                        </div>
                    </main>
                </div>
            </>
        );
    }
}

export default Home;