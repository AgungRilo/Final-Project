let defaultState = {
    dataKelurahan:[
        {
            provinsi:"Jawa Barat",
            kota:"Bekasi",
            kecamatan:"Setu",
            kelurahan:"LubangBuaya"
        }
    ]
}

const kelurahanReducer = (state = defaultState, action)=>{
    switch (action.type){
        case "TAMBAH_KELURAHAN":
            let newKelurahan = {
                kota:action.payload.kota,
                provinsi:action.payload.provinsi,
                kecamatan:action.payload.kecamatan,
                kelurahan:action.payload.kelurahan
            }
            let data = {}

            if(state.dataKelurahan.length === 0){
                data = state.dataKelurahan.concat(newKelurahan)
            } else {
                data = state.dataKelurahan.concat(newKelurahan)
            }

            return {
                dataKelurahan : data
            }
        case "HAPUS_KELURAHAN":
            console.log("Hapus Kelurahan");
            let dataKelurahanBaru = state.dataKelurahan
            dataKelurahanBaru.splice(action.payload.index, 1);
            return {
                ...state,
                dataKelurahan:dataKelurahanBaru
        }
        case "SUNTING_KELURAHAN":
            let newKelurahanSunting = state.dataKelurahan
            newKelurahanSunting[action.payload.index].provinsi = action.payload.provinsi;
            newKelurahanSunting[action.payload.index].kota = action.payload.kota;
            newKelurahanSunting[action.payload.index].kelurahan = action.payload.kelurahan;

            return{
                dataKelurahan:newKelurahanSunting
            }
        default:
            return state
    }
}

export default kelurahanReducer