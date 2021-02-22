import React, { Component } from 'react';

import { Label,Input,Button } from '../../component';
import { connect } from 'react-redux';
import bencana from '../bencana';

class Laporan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinsi:"",
            kota:"",
            kecamatan:"",
            kelurahan:"",
            tanggalBencana:"",
            tanggalKegiatan:"",
            bantuan:"",
            kondisi:0,
            index:"",
            kegiatanEdit:{},
            disabled  :true
            // idx:""

        }
    }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })

        if(el.target.value != ""){
            this.setState({
                disabled: false
            })
        }

    }

    simpan = el => {
        let obj=this.state

        if (this.state.kondisi === 0) {
            if (obj.kota === "" || obj.kecamatan === "" || obj.kelurahan === "" || obj.provinsi === "" || obj.bencana === "" || obj.bantuan !== "" ) {
                alert("Data tidak boleh kosong !")
                
            } else {
                // const idxKegiatan = this.props.kegiatanData.findIndex(x => x.kegiatan === this.state.kegiatan)
                // console.log("index",idxKegiatan);
                console.log("bencana data",this.props.kegiatanData);
            
                // if(idxKegiatan >=0){
                //     alert("Nama kegiatan sudah ada !!")
                // }else{
                    this.props.simpanKegiatan(obj);
                    el.preventDefault()
                    this.clear()
                    alert("Data berhasil tersimpan !!")
                // }
            }
        } else {
            this.props.suntingKegiatan(obj)
            this.setState({
                kondisi:0
            });
            el.preventDefault()
            this.clear()
            alert("Data berhasil disunting")
        }
    }


    
    clear = () => {
        this.setState({ 
          kota : "",
          provinsi:"",
          kecamatan:"",
          kelurahan:"",
          tanggalBencana:"",
          tanggalKegiatan:""
          
          
        })
    }

    hapusData = (index) => {
        if(window.confirm("Apakah anda ingin menghapus data ini ?")){

            let kegiatanBaru = this.props.kegiatanData;
            
            console.log(kegiatanBaru);
            this.props.hapuskegiatan({kegiatanUpdate : kegiatanBaru})
            
            alert("Berhasil Menghapus Data !!");
        }
        this.setState({})
        
    }


    sunting = (index) => {
        this.setState({
          kondisi: 1,
          index: index
        });
    
        const dataEdit=this.props.dataKegiatan[index];
      
        this.setState({
          kegiatanEdit: dataEdit
        })
      
      }
    
      reset = ()=> {
        this.setState({
          kegiatanEdit :{}
        })
      }
    
      refresh= ()=>{
        this.setState({})
      }

    render() {
        console.log(this.props.provinsiData);
        console.log(this.props.kotaData);
        console.log(this.props.kecamatanData);
        console.log(this.props.kegiatanData);
        
        console.log("data b encacna", this.props.kegiatanData);
        if ("kegiatan" in this.state.kegiatanEdit) {
            this.setState({
                tanggalKegiatan: this.state.kegiatanEdit.tanggalKegiatan,
                tanggalBencana: this.state.kegiatanEdit.tanggalBencana,
                deskripsi: this.state.kegiatanEdit.deskripsi
            })
            this.reset();
        }
        const {kota, provinsi,kecamatan,kelurahan,tanggalBencana,tanggalKegiatan,bantuan,bencana}=this.state
        return (
            <>
                <div>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid" id="container">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-table mr-1" /> Laporan

                                            
                                            <button type="button" id="btnKegiatan" className="btn btn-primary"  onClick={window.print}>
                                                <i className="fas fa-plus mr-1" />Cetak
                                            </button>

                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                            
                                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
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


                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Form Kegiatan</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Label className="required">Nama Provinsi</Label>
                                <select name="provinsi" className="form-control" value={provinsi} onChange={this.setValue} >
                                    <option value="">Pilih Provinsi</option>
                                {
                                    this.props.provinsiData.map(
                                        (Item, idx) =>
                                        <option value={Item.provinsi} key={idx}>{Item.provinsi}</option>
                                    )
                                }
                                </select>
                                
                            </div>
                            <div className="modal-body">
                                <Label className="required">Nama Kota</Label>
                                <select name="kota" className="form-control" disabled={this.state.disabled} value={kota} onChange={this.setValue} >
                                    <option value="">Pilih Kota</option>
                                {
                                    this.props.kotaData.map(
                                        (Item, idx) =>
                                        <option value={Item.kota} key={idx}>{Item.kota}</option>
                                    )
                                }
                                </select>
                                
                            </div>
                            <div className="modal-body">
                                <Label className="required">Nama Kecamatan</Label>
                                <select name="kecamatan" className="form-control" disabled={this.state.disabled} value={kecamatan} onChange={this.setValue} >
                                    <option value="">Pilih Kecamatan</option>
                                {
                                    this.props.kecamatanData.map(
                                        (Item, idx) =>
                                        <option value={Item.kecamatan} key={idx}>{Item.kecamatan}</option>
                                    )
                                }
                                </select>
                                
                            </div>
                            <div className="modal-body">
                                <Label className="required">Nama Kelurahan</Label>
                                <select name="kelurahan" className="form-control" disabled={this.state.disabled} value={kelurahan} onChange={this.setValue} >
                                    <option value="">Pilih Kelurahan</option>
                                {
                                    this.props.kelurahanData.map(
                                        (Item, idx) =>
                                        <option value={Item.kelurahan} key={idx}>{Item.kelurahan}</option>
                                    )
                                }
                                </select>
                                
                            </div>
                            <div className="modal-body">
                                <Label className="required">Jenis Bencana</Label>
                                <select name="bencana" className="form-control" disabled={this.state.disabled} value={bencana} onChange={this.setValue} >
                                    <option value="">Pilih Bencana</option>
                                {
                                    this.props.bencanaData.map(
                                        (Item, idx) =>
                                        <option value={Item.bencana} key={idx}>{Item.bencana}</option>
                                    )
                                }
                                </select>
                                
                            </div>
                            <div className="modal-body">
                                <Label className="required">Tanggal Kejadian</Label>
                                <Input type="date" disabled={this.state.disabled} name="tanggalBencana" className="form-control"  value={tanggalBencana} onChange={this.setValue} />
                            </div>
                            <div className="modal-body">
                                <Label className="required">Tanggal Kegiatan</Label>
                                <Input type="date" disabled={this.state.disabled} name="tanggalKegiatan" className="form-control"  value={tanggalKegiatan} onChange={this.setValue} />
                            </div>
                            <div className="modal-body">
                                <Label className="required">Bantuan yang diberikan</Label>
                                {
                                    this.props.bantuanData.map(
                                        (b,idx)=>
                                        <div className="modal-body">
                                        <Input type="checkbox" disabled={this.state.disabled} name="bantuan" className="form-control"  value={bantuan} onChange={this.setValue} ></Input>
                                        <Label>{b.bantuan}</Label>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Tutup</button>
                                <button type="button" className="btn btn-primary"  disabled={this.state.disabled}  onClick={this.simpan}>Simpan</button>
                            </div>
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
      simpanKegiatan: (data)=> dispatch({type:"TAMBAH_KEGIATAN", payload: data}),
      hapusKegiatan: (data)=> dispatch({type:"HAPUS_KEGIATAN", payload: data}),
      suntingKegiatan: (data)=> dispatch({type:"SUNTING_KEGIATAN", payload: data}),
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Laporan);