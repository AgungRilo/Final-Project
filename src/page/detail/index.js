import React, { Component } from 'react';

import { Label,Input,Button } from '../../component';
import { connect } from 'react-redux';
import bencana from '../bencana';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    

    render() {
       
        
        return (
            <>
                <div>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid" id="container">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-table mr-1" /> Detail

                                            
                                            

                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                            
                                                <table className="table table-bordered" width="100%" cellSpacing={0}>
                                                    <thead>
                                                        <tr>
                                                            <th>Tanggal</th>
                                                            <th>Provinsi</th>
                                                            <th>Kota/Kab.</th>
                                                            <th>Kecamatan</th>
                                                            <th>Des/Kel.</th>
                                                            <th>Tanggal Bencana</th>
                                                            <th>Bencana</th>
                                                            
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {this.props.kegiatanData &&
                                                            this.props.kegiatanData.map((k, index)=>{
                                                                return(
                                                                
                                                                    <tr key={index}>
                                                                        <td>{k.tanggalKegiatan}</td>
                                                                        <td>{k.provinsi}</td>
                                                                        <td>{k.kota}</td>
                                                                        <td>{k.kecamatan}</td>
                                                                        <td>{k.kelurahan}</td>
                                                                        <td>{k.tanggalBencana}</td>
                                                                        <td>{k.bencana}</td>
                                                                        
                                                                        
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>

                        </div>
                    </div>
                </div>


                
                

            </>

        );
    }
}

const mapStateToProps = state => ({
    kotaData: state.KReducer.dataKota,
    provinsiData: state.PReducer.dataProvinsi,
    kecamatanData: state.KecReducer.dataKecamatan,
    kelurahanData: state.KelReducer.dataKelurahan,
    bantuanData: state.BanReducer.dataBantuan,
    bencanaData: state.BReducer.dataBencana,
    kegiatanData:state.KegReducer.dataKegiatan
  })
  
  const mapDispatchToProps = dispatch => {
    return {
      
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Detail);