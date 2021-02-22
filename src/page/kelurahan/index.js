import React, { Component } from 'react';

import { Label,Input,Button } from '../../component';
import { connect } from 'react-redux';

class Kelurahan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinsi:"",
            kota:"",
            kecamatan:"",
            kelurahan:"",
            kondisi:0,
            index:"",
            kelurahanEdit:{},
            disabled  :true,
            statusEdit : false
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
            if (obj.kota === "" || obj.kecamatan === "" || obj.kelurahan === "" || obj.provinsi === "" ) {
                alert("Data tidak boleh kosong !")
                
            } else {
                const idxKelurahan = this.props.kelurahanData.findIndex(x => x.kelurahan === this.state.kelurahan)
                console.log("index",idxKelurahan);
                console.log("bencana data",this.props.kelurahanData);
            
                if(idxKelurahan >=0){
                    alert("Nama kelurahan sudah ada !!")
                }else{
                    this.props.simpanKelurahan(obj);
                    el.preventDefault()
                    this.clear()
                    alert("Data berhasil tersimpan !!")
                }
            }
        } else {
            this.props.suntingKelurahan(obj)
            this.setState({
                statusEdit:false
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
          kelurahan:""
          
        })
    }

    hapusData = (index) => {
        if(window.confirm("Apakah anda ingin menghapus data ini ?")){

            let kelurahanBaru = this.props.kelurahanData;
            
            console.log(kelurahanBaru);
            this.props.hapusKelurahan({kelurahanUpdate : kelurahanBaru,index:index})
            
            alert("Berhasil Menghapus Data !!");
        }
        this.setState({})
        
    }


    sunting = (index) => {
        const dataEdit=this.props.kelurahanData[index];
        this.setState({
            kelurahanEdit: dataEdit,
            kondisi: 1,
            index: index,
            statusEdit:true
        });
      
      }
    
      reset = ()=> {
        this.setState({
          kelurahanEdit :{}
        })
      }
    
      refresh= ()=>{
        this.setState({})
      }

    render() {
        console.log(this.props.provinsiData);
        console.log(this.props.kotaData);
        console.log(this.props.kecamatanData);
        console.log(this.props.kelurahanData);
        
        console.log("data b encacna", this.props.bencanaData);
        if (this.state.statusEdit) {
            this.setState({
                provinsi:this.state.kelurahanEdit.provinsi,
                kota:this.state.kelurahanEdit.kota,
                kecamatan:this.state.kelurahanEdit.kecamatan,
                kelurahan: this.state.kelurahanEdit.kelurahan,
                deskripsi: this.state.kelurahanEdit.deskripsi,
                statusEdit:false
            })
            // this.reset();
        }
        const {kota, provinsi,kecamatan,kelurahan}=this.state
        return (
            <>
                <div>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid" id="container">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-table mr-1" /> Data Kelurahan

                                            <button type="button" id="btnKelurahan" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                                                <i className="fas fa-plus mr-1" />Tambah
                                            </button>

                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                            
                                                <table className="table table-bordered" width="100%" cellSpacing={0}>
                                                    <thead>
                                                        <tr>
                                                            <th>Provinsi</th>
                                                            <th>Kota/Kab.</th>
                                                            <th>Kecamatan</th>
                                                            <th>Des/Kel.</th>
                                                            <th>Aksi</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {this.props.kelurahanData &&
                                                            this.props.kelurahanData.map((k, index)=>{
                                                                return(
                                                                
                                                                    <tr key={index}>
                                                                        <td>{k.provinsi}</td>
                                                                        <td>{k.kota}</td>
                                                                        <td>{k.kecamatan}</td>
                                                                        <td>{k.kelurahan}</td>
                                                                        
                                                                        <td>
                                                                            <Button dataToogle="modal" dataTarget="#exampleModal" id="sunting" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={()=>{this.sunting(index)}}>Sunting</Button>
                                                                            <Button id="hapus" className="btn btn-danger" onClick={()=>{this.hapusData(index)}}>Hapus</Button>
                                                                        </td>
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
                                <h5 className="modal-title" id="exampleModalLabel">Form Kelurahan</h5>
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
                                <Input type="text" disabled={this.state.disabled} name="kelurahan" className="form-control" placeholder="Masukkan Nama Kelurahan" value={kelurahan} onChange={this.setValue} />
                                
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
    kelurahanData: state.KelReducer.dataKelurahan
  })
  
  const mapDispatchToProps = dispatch => {
    return {
      simpanKelurahan: (data)=> dispatch({type:"TAMBAH_KELURAHAN", payload: data}),
      hapusKelurahan: (data)=> dispatch({type:"HAPUS_KELURAHAN", payload: data}),
      suntingKelurahan: (data)=> dispatch({type:"SUNTING_KELURAHAN", payload: data}),
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Kelurahan);