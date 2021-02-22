let defaultState = {

    dataBantuan: [
        {
            bantuan:"Mie Instan",
            deskripsi:"Makanan",
            nominal:10000
        },
        {
            bantuan:"Sarden",
            deskripsi:"Makanan Kaleng",
            nominal:15000
        }
    ]
}

const bantuanReducer = (state = defaultState, action) => {


    switch (action.type) {
        case "TAMBAH_BANTUAN":
            let newBantuan = {
                
                bantuan: action.payload.bantuan,
                deskripsi: action.payload.deskripsi,
                nominal: action.payload.nominal
            }
            //dibungkus ke dalam data untuk dikirim
            let data = {}
            
            //concat untuk push
            if (state.dataBantuan.length === 0) {
                data = state.dataBantuan.concat(newBantuan)

            } else {
                data = state.dataBantuan.concat(newBantuan)
            }

            return {
                dataBantuan: data

            }
        case "HAPUS_BANTUAN":
            console.log("HAPUS BANTUAN");
            let dataBantuanBaru =state.dataBantuan
                dataBantuanBaru.splice(action.payload.index, 1);
                console.log("cek ini",dataBantuanBaru);
            return {
                ...state,
                datBantuan: dataBantuanBaru
            }
        case "SUNTING_BANTUAN":
            let newBantuanSunting=state.dataBantuan
            newBantuanSunting[action.payload.index].bantuan = action.payload.bantuan;
            newBantuanSunting[action.payload.index].deskripsi = action.payload.deskripsi;
            newBantuanSunting[action.payload.index].nominal = action.payload.nominal
                
            return{
                dataBantuan:newBantuan
            }

        
        default:
            return state
    }
}

export default bantuanReducer