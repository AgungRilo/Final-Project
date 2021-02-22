import React, { Component } from 'react';

import { Label,Input,Button } from '../../component';
import { connect } from 'react-redux';

class Kota extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinsi:"",
            kota:"",
            kondisi:0,
            index:"",
            kotaEdit:{},
            disable:true,
            statusEdit : false
            // idx:""
        }
    }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
        if(el.target.value !=""){
            this.setState({
                disable:false
            })
        }

    }

    simpan = el => {
        let obj=this.state

        if (this.state.kondisi === 0) {
            if (obj.kota === "" || obj.provinsi === "") {
                alert("Data tidak boleh kosong !")       
            } else {
                const idxKota = this.props.kotaData.findIndex(x => x.kota === this.state.kota)
                console.log("index",idxKota);
                console.log("bencana data",this.props.kotaData);
            
                if(idxKota >=0){
                    alert("Nama kota sudah ada !!")
                }else{
                    this.props.simpanKota(obj);
                    el.preventDefault()
                    this.clear()
                    alert("Data berhasil tersimpan !!")
                }
            }
        } else {
            this.props.suntingKota(obj)
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
          
        })
    }

    hapusData = (index) => {
        if(window.confirm("Apakah anda ingin menghapus data ini ?")){

            let kotaBaru = this.props.kotaData;
            
            console.log(kotaBaru);
            this.props.hapusKota({kotaUpdate : kotaBaru,index:index})
            
            alert("Berhasil Menghapus Data !!");
        }
        this.setState({})
        
    }


    sunting = (index) => {
        console.log("index nih,",index);
        this.setState({
          kondisi: 1,
          index: index,
          statusEdit:true
        });
    
        let dataEdit=this.props.kotaData[index];
      
        this.setState({
          kotaEdit: dataEdit
        })
      
      }
    
      reset = ()=> {
        this.setState({
          kotaEdit :{}
        })
      }
    
      refresh= ()=>{
        this.setState({})
      }

    render() {
        console.log(this.props.provinsiData);
        
        if(this.state.statusEdit){
            this.setState({
                kota:this.state.kotaEdit.kota,
                provinsi:this.state.kotaEdit.provinsi,
                statusEdit:false
                
            })
            // this.reset();
        }
        const {kota, provinsi}=this.state
        return (
            <>
                <div>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid" id="container">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-table mr-1" /> Data Kota

                                            <button type="button" id="btnKota" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                                                <i className="fas fa-plus mr-1" />Tambah
                                            </button>

                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                            
                                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                                    <thead>
                                                        <tr>
                                                            <th>Provinsi</th>
                                                            <th>Kota</th>
                                                            <th>Aksi</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {this.props.kotaData &&
                                                            this.props.kotaData.map((k, index)=>{
                                                                return(
                                                                
                                                                    <tr key={index}>
                                                                        <td>{k.provinsi}</td>
                                                                        <td>{k.kota}</td>
                                                                        
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
                                <h5 className="modal-title" id="exampleModalLabel">Form Kota</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                

                                <Label className="required">Nama Kecamatan</Label>
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
                                <Input type="text" name="kota" className="form-control" placeholder="Masukkan Nama Kota" value={kota} onChange={this.setValue} ></Input>
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Tutup</button>
                                <button type="button" className="btn btn-primary" disabled={this.state.disable} onClick={this.simpan}>Simpan</button>
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
    provinsiData: state.PReducer.dataProvinsi
  })
  
  const mapDispatchToProps = dispatch => {
    return {
      simpanKota: (data)=> dispatch({type:"TAMBAH_KOTA", payload: data}),
      hapusKota: (data)=> dispatch({type:"HAPUS_KOTA", payload: data}),
      suntingKota: (data)=> dispatch({type:"SUNTING_KOTA", payload: data}),
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Kota);