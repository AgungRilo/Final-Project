let defaultState = {
    dataKota:[
        {
            provinsi:"Jawa Barat",
            kota:"Depok"
        }
    ]
}

const kotaReducer = (state = defaultState, action)=>{
    switch (action.type){
        case "TAMBAH_KOTA":
            let newKota = {
                kota:action.payload.kota,
                provinsi:action.payload.provinsi
            }
            let data = {}

            if(state.dataKota.length === 0){
                data = state.dataKota.concat(newKota)
            } else {
                data = state.dataKota.concat(newKota)
            }

            return {
                dataKota : data
            }
        case "HAPUS_KOTA":
            console.log("Hapus Kota");
            let dataKotaBaru = state.dataKota
            dataKotaBaru.splice(action.payload.index, 1);
            return {
                ...state,
                dataKota:dataKotaBaru
        }
        case "SUNTING_KOTA":
            let newKotaSunting = state.dataKota
            newKotaSunting[action.payload.index].provinsi = action.payload.provinsi;
            newKotaSunting[action.payload.index].kota = action.payload.kota;

            return{
                dataKota:newKota
            }
        default:
            return state
    }
}

export default kotaReducer