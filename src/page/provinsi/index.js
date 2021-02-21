import React, { Component } from 'react';
import {Input,Label,Button} from '../../component';
import { connect } from 'react-redux';

class Provinsi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            provinsi:"",
            kondisi:0,
            provinsiEdit:{},
            index:""
            
         }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })

    }
    clear = () => {
        this.setState({ 
          provinsi : ""
          
        })
    }

    simpan=el=>{
        let obj = this.state

        if(this.state.kondisi === 0){
            if(obj.provinsi === ""){
                alert("Nama provinsi tidak boleh kosong")
            } else {
                const idxProvinsi = this.props.provinsiData.findIndex(x => x.provinsi === this.state.provinsi)
                if(idxProvinsi>=0){
                    alert("Nama provinsi sudah ada !!")
                } else {
                    this.props.simpanProvinsi(obj)
                    el.preventDefault()
                    this.clear()
                    alert("Data berhasil tersimpan !!")
                }
            }
        } else {
            this.props.suntingProvinsi(obj)
            this.setState({
                kondisi:0
            });
            el.preventDefault()
            this.clear()
            alert("Data berhasil disunting")
        }
    }

    hapusData = (index)=>{
        if(window.confirm("Apakah anda inging menghapus data ini ?")){
            let provinsiBaru = this.props.provinsiData;

            console.log("provinsi",provinsiBaru);
            this.props.hapusProvinsi({provinsiUpdate : provinsiBaru,index:index})
            alert("Berhasil Menghapus Data !!");
            this.setState({})
        }
    }

    sunting = (index)=>{
        this.setState({
            kondisi:1,
            index:index
        });
        const dataEdit = this.props.dataProvinsi[index];

        this.setState({
            provinsiEdit:dataEdit
        })
    }


    render() { 
        if("bencana" in this.state.provinsiEdit){
            this.setState({
                provinsi:this.state.provinsiEdit.provinsi
            })
            this.reset();
        }
        const {provinsi}=this.state
        return ( 
            <>
                <div>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid" id="container">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-table mr-1" /> Data Provinsi

                                            <button type="button" className="right" data-toggle="modal" data-target="#exampleModal">
                                                <i className="fas fa-plus mr-1" />Tambah
                                            </button>

                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                                    <thead>
                                                        <tr>
                                                            {/* <th>No</th> */}
                                                            <th>Nama Provinsi</th>
                                                            <th>Aksi</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {
                                                            this.props.provinsiData.map((p, index)=>{
                                                                return(
                                                                
                                                                    <tr key={index}>
                                                                        {/* <td>{index+1}</td> */}
                                                                        <td>{p.provinsi}</td>
                                                                        <td>
                                                                            <Button id="sunting" className="btn btn-warning">Sunting</Button>
                                                                            <Button id="hapus" className="btn btn-danger" onClick={this.hapusData}>Hapus</Button>
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
                                <h5 className="modal-title" id="exampleModalLabel">Form Bencana</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Label>Nama Provinsi</Label>
                                <Input type="text" name="provinsi" className="form-control" placeholder="Masukkan Nama Provinsi" value={provinsi} onChange={this.setValue} ></Input>
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Tutup</button>
                                <button type="button" className="btn btn-primary" onClick={this.simpan}>Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
         );
    }
}
 
const mapStateToProps = state => ({
    provinsiData: state.PReducer.dataProvinsi
  })
  
  const mapDispatchToProps = dispatch => {
    return {
      simpanProvinsi: (data)=> dispatch({type:"TAMBAH_PROVINSI", payload: data}),
      hapusProvinsi: (data)=> dispatch({type:"HAPUS_PROVINSI", payload: data}),
      suntingProvinsi: (data)=> dispatch({type:"SUNTING_PROVINSI", payload: data}),
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Provinsi);