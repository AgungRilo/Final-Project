import React, { Component } from 'react';

import { Label,Input,Button } from '../../component';
import { connect } from 'react-redux';

class Bencana extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bencana:"",
            deskripsi:"",
            kondisi:0,
            index:"",
            bencanaEdit:{}
            // idx:""
        }
    }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })

    }

    simpan = el => {
        let obj=this.state

        if (this.state.kondisi === 0) {
            if (obj.bencana === "") {
                alert("Nama bencana tidak boleh kosong !")
                
            } else {
                const idxBencana = this.props.bencanaData.findIndex(x => x.bencana === this.state.bencana)
                console.log("index",idxBencana);
                console.log("bencana data",this.props.bencanaData);
            
                if(idxBencana >=0){
                    alert("Nama bencana sudah ada !!")
                }else{
                    this.props.simpanBencana(obj);
                    el.preventDefault()
                    this.clear()
                    alert("Data berhasil tersimpan !!")
                }
            }
        } else {
            this.props.suntingBencana(obj)
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
          bencana : "",
          deskripsi : ""
        })
    }

    hapusData = (index) => {
        if(window.confirm("Apakah anda ingin menghapus data ini ?")){

            let bencanaBaru = this.props.bencanaData;
            
            console.log(bencanaBaru);
            this.props.hapusBencana({bencanaUpdate : bencanaBaru,index:index})
            
            alert("Berhasil Menghapus Data !!");
        }
        this.setState({})
        
    }


    sunting = (index) => {
        this.setState({
          kondisi: 1,
          index: index
        });
    
        const dataEdit=this.props.dataBencana[index];
      
        this.setState({
          bencanaEdit: dataEdit
        })
      
      }
    
      reset = ()=> {
        this.setState({
          bencanaEdit :{}
        })
      }
    
      refresh= ()=>{
        this.setState({})
      }

    render() {
        console.log("data b encacna",this.props.bencanaData);
        if("bencana" in this.state.bencanaEdit){
            this.setState({
                bencana:this.state.bencanaEdit.bencana,
                deskripsi:this.state.bencanaEdit.deskripsi
            })
            this.reset();
        }
        const {bencana,deskripsi}=this.state
        return (
            <>
                <div>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid" id="container">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-table mr-1" /> Data Bencana

                                            <button type="button" className="right" data-toggle="modal" data-target="#exampleModal">
                                                <i className="fas fa-plus mr-1" />Tambah
                                            </button>

                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                            
                                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                                    <thead>
                                                        <tr>
                                                            
                                                            <th>Nama Bencana</th>
                                                            <th>Deskripsi</th>
                                                            <th>Aksi</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {this.props.bencanaData &&
                                                            this.props.bencanaData.map((a, index)=>{
                                                                return(
                                                                
                                                                    <tr key={index}>
                                                                        
                                                                        <td>{a.bencana}</td>
                                                                        <td>{a.deskripsi}</td>
                                                                        <td>
                                                                            <Button id="sunting" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={this.sunting}>Sunting</Button>
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
                                <Label>Nama Bencana</Label>
                                <Input type="text" name="bencana" className="form-control" placeholder="Masukkan Nama Bencana" value={bencana} onChange={this.setValue} ></Input>
                                <Label>Deskripsi</Label>
                                <Input type="text" name="deskripsi" className="form-control" placeholder="Masukkan Deskripsi" value={deskripsi} onChange={this.setValue} ></Input>
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
    bencanaData: state.BReducer.dataBencana
  })
  
  const mapDispatchToProps = dispatch => {
    return {
      simpanBencana: (data)=> dispatch({type:"TAMBAH_BENCANA", payload: data}),
      hapusBencana: (data)=> dispatch({type:"HAPUS_BENCANA", payload: data}),
      suntingBencana: (data)=> dispatch({type:"SUNTING_BENCANA", payload: data}),
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Bencana);