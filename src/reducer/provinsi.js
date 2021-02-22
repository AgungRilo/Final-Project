let defaultState = {
    dataProvinsi:[
        {
            provinsi:"Jawa Barat",
        },
        {
            provinsi:"Jawa Tengah",
        }

    ]
}

const provinsiReducer = (state =defaultState,action)=>{
    switch (action.type){
        case "TAMBAH_PROVINSI":
            let newProvinsi = {
                provinsi :action.payload.provinsi
            }
            let data = {}

            if(state.dataProvinsi.length === 0){
                data = state.dataProvinsi.concat(newProvinsi)
            } else {
                data = state.dataProvinsi.concat(newProvinsi)
            }

            return {
                dataProvinsi : data
            }
        case "HAPUS_PROVINSI":
            let dataProvinsiBaru = state.dataProvinsi
            dataProvinsiBaru.splice(action.payload.index,1);
        return{
            ...state,
            dataProvinsi:dataProvinsiBaru
        }
        case "SUNTING_PROVINSI":
            let newProvinsiSunting=state.dataProvinsi
            newProvinsiSunting[action.payload.index].provinsi = action.payload.provinsi;
        return{
            dataProvinsi:newProvinsiSunting
        }
        default:
            return state
    }
}

export default provinsiReducer