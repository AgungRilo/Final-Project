import React, { Component } from 'react';

import { Label, Input, Button, Main,I } from '../../component';
import { connect } from 'react-redux';


class Bantuan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bantuan: "",
            deskripsi: "",
            nominal:"",
            kondisi: 0,
            index: "",
            bantuanEdit: {},
            statusEdit:false
            // idx:""
        }
    }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })

    }

    simpan = el => {
        let obj = this.state

        if (this.state.kondisi === 0) {
            if (obj.bantuan === "") {
                alert("Nama bantuan tidak boleh kosong !")

            } else {
                const idxBantuan = this.props.bantuanData.findIndex(x => x.bantuan === this.state.bantuan)
                console.log("index", idxBantuan);
                console.log("Bantuan data", this.props.bantuanData);

                if (idxBantuan >= 0) {
                    alert("Nama bantuan sudah ada !!")
                } else {
                    this.props.simpanBantuan(obj);
                    el.preventDefault()
                    this.clear()
                    alert("Data berhasil tersimpan !!")
                }
            }
        } else {
            this.props.suntingBantuan(obj)
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
            bantuan: "",
            deskripsi: "",
            nominal:""
        })
    }

    hapusData = (index) => {
        if (window.confirm("Apakah anda ingin menghapus data ini ?")) {

            let bantuanBaru = this.props.BantuanData;

            console.log(bantuanBaru);
            this.props.hapusBantuan({ bantuanUpdate: bantuanBaru,index:index })

            alert("Berhasil Menghapus Data !!");
        }
        this.setState({})

    }


    sunting = (index) => {
        const dataEdit = this.props.bantuanData[index];
        this.setState({
            bantuanEdit: dataEdit,
            kondisi: 1,
            index: index,
            statusEdit:true
        });
    }

    reset = () => {
        this.setState({
            bantuanEdit: {}
        })
    }

    refresh = () => {
        this.setState({})
    }

    render() {
        console.log("data b encacna", this.props.bantuanData);
        if (this.state.statusEdit) {
            this.setState({
                bantuan: this.state.bantuanEdit.bantuan,
                deskripsi: this.state.bantuanEdit.deskripsi,
                nominal: this.state.bantuanEdit.nominal,
                statusEdit:false
            })
            // this.reset();
        }
        const { bantuan, deskripsi,nominal } = this.state
        return (
            <>
                <div>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_content">
                            <Main>
                                <div className="container-fluid" id="container">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <I className="fas fa-table mr-1" /> Data Bantuan

                                            <button type="button" id="btnBantuan" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                                                <I className="fas fa-plus mr-1" />Tambah
                                            </button>

                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">

                                                <table className="table table-bordered" width="100%" cellSpacing={0}>
                                                    <thead>
                                                        <tr>

                                                            <th>Nama Bantuan</th>
                                                            <th>Deskripsi</th>
                                                            <th>Nominal</th>
                                                            <th>Aksi</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {this.props.bantuanData &&
                                                            this.props.bantuanData.map((a, index) => {
                                                                return (

                                                                    <tr key={index}>

                                                                        <td>{a.bantuan}</td>
                                                                        <td>{a.deskripsi}</td>
                                                                        <td>{a.nominal}</td>
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
                            </Main>

                        </div>
                    </div>
                </div>


                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Form Bantuan</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Label className="required">Nama Bantuan</Label>
                                <Input type="text" name="bantuan" className="form-control" placeholder="Masukkan Nama Bantuan" value={bantuan} onChange={this.setValue} />
                                <Label>Deskripsi</Label>
                                <Input type="text" name="deskripsi" className="form-control" placeholder="Masukkan Deskripsi" value={deskripsi} onChange={this.setValue} />
                                <Label>Nominal</Label>
                                <Input type="number" name="nominal" min="1" className="form-control" placeholder="Masukkan Nominal" value={nominal} onChange={this.setValue} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Tutup</button>
                                <Button type="button" className="btn btn-primary" onClick={this.simpan}>Simpan</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }
}

const mapStateToProps = state => ({
    bantuanData: state.BanReducer.dataBantuan
})

const mapDispatchToProps = dispatch => {
    return {
        simpanBantuan: (data) => dispatch({ type: "TAMBAH_BANTUAN", payload: data }),
        hapusBantuan: (data) => dispatch({ type: "HAPUS_BANTUAN", payload: data }),
        suntingBantuan: (data) => dispatch({ type: "SUNTING_BANTUAN", payload: data }),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bantuan);