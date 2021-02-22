let defaultState = {
    dataKegiatan:[
        
    ]
}

const kegiatanReducer = (state = defaultState, action)=>{
    switch (action.type){
        case "TAMBAH_KEGIATAN":
            let newKegiatan = {
                provinsi:action.payload.provinsi,
                kota:action.payload.kota,
                kecamatan:action.payload.kecamatan,
                kelurahan:action.payload.kelurahan,
                tanggalKegiatan:action.payload.tanggalKegiatan,
                tanggalBencana:action.payload.tanggalBencana,
                bencana:action.payload.bencana,
                bantuan:action.payload.bantuan
            }
            let data = {}

            if(state.dataKegiatan.length === 0){
                data = state.dataKegiatan.concat(newKegiatan)
            } else {
                data = state.dataKegiatan.concat(newKegiatan)
            }

            return {
                dataKegiatan : data
            }
        case "HAPUS_KEGIATAN":
            console.log("Hapus Kegiatan");
            let dataKegiatanBaru = state.dataKegiatan
            dataKegiatanBaru.splice(action.payload.index, 1);
            return {
                ...state,
                dataKegiatan:dataKegiatanBaru
        }
        case "SUNTING_KEGIATAN":
            let newKegiatanSunting = state.dataKegiatan
            newKegiatanSunting[action.payload.index].provinsi = action.payload.provinsi;
            newKegiatanSunting[action.payload.index].kota = action.payload.kota;
            newKegiatanSunting[action.payload.index].kegiatan = action.payload.kegiatan;
            newKegiatanSunting[action.payload.index].tanggalBantuan = action.payload.tanggalBantuan;
            newKegiatanSunting[action.payload.index].tanggalBencana = action.payload.tanggalBencana;

            return{
                dataKegiatan:newKegiatan
            }
        default:
            return state
    }
}

export default kegiatanReducer