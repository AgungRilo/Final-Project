let defaultState = {
    dataKecamatan:[
        {
            provinsi:"Jawa Barat",
            kota:"Depok",
            kecamatan:"Cilodong"
        },
        {
            provinsi:"Jawa Barat",
            kota:"Bekasi",
            kecamatan:"Setu"
        }
    ]
}

const kecamatanReducer = (state = defaultState, action)=>{
    switch (action.type){
        case "TAMBAH_KECAMATAN":
            let newKecamatan = {
                kota:action.payload.kota,
                provinsi:action.payload.provinsi,
                kecamatan:action.payload.kecamatan
            }
            let data = {}

            if(state.dataKecamatan.length === 0){
                data = state.dataKecamatan.concat(newKecamatan)
            } else {
                data = state.dataKecamatan.concat(newKecamatan)
            }

            return {
                dataKecamatan : data
            }
        case "HAPUS_KECAMATAN":
            console.log("Hapus Kecamatan");
            let dataKecamatanBaru = state.dataKecamatan
            dataKecamatanBaru.splice(action.payload.index, 1);
            return {
                ...state,
                dataKecamatan:dataKecamatanBaru
        }
        case "SUNTING_KECAMATAN":
            let newKecamatanSunting = state.dataKecamatan
            newKecamatanSunting[action.payload.index].provinsi = action.payload.provinsi;
            newKecamatanSunting[action.payload.index].kota = action.payload.kota;
            newKecamatanSunting[action.payload.index].kecamatan = action.payload.kecamatan;

            return{
                dataKecamatan:newKecamatan
            }
        default:
            return state
    }
}

export default kecamatanReducer