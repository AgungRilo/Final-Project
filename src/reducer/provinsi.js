let defaultState = {
    dataProvinsi:[
        // {
        //     provinsi:"Jawa Barat",
        // }
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
        case "SUNTIN_PROVINSI":
            let newBencanaSunting=state.dataProvinsi
            newBencanaSunting[action.provinsi.index].provinsi = action.payload.provinsi;
        return{
            dataProvinsi:newProvinsi
        }
        default:
            return state
    }
}

export default provinsiReducer