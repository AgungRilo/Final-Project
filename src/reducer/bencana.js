let defaultState = {

    dataBencana: [
        {

            bencana: "Gempa Bumi",
            deskripsi: "Disebabkan pergeseran lempeng bumi"
        },
        {
            bencana: "Gunung Meletus",
            deskripsi: "Disebabkan oleh gunung berapi aktif yang erupsi"
        },
        {
            bencana: "Angin Puting Beliun",
            deskripsi: "Disebabkan oleh cuaca ekstrim"
        },
        {
            bencana: "Tanah Longsor",
            deskripsi: "Disebabkan oleh tanah yang lapuk dan intensitas hujan yang tinggi"
        },
        {
            bencana: "Banjir",
            deskripsi: "Disebabkan oleh penyumbatan di aliran irigasi dan didukung oleh intensitas hujan yang tinggi"
        }
    ]
}

const bencanaReducer = (state = defaultState, action) => {


    switch (action.type) {
        case "TAMBAH_BENCANA":
            let newBencana = {
                
                bencana: action.payload.bencana,
                deskripsi: action.payload.deskripsi
            }
            //dibungkus ke dalam data untuk dikirim
            let data = {}
            
            //concat untuk push
            if (state.dataBencana.length === 0) {
                data = state.dataBencana.concat(newBencana)

            } else {
                data = state.dataBencana.concat(newBencana)
            }

            return {
                dataBencana: data

            }
        case "HAPUS_BENCANA":
            console.log("HAPUS BENCANA");
            let dataBencanaBaru =state.dataBencana
                dataBencanaBaru.splice(action.payload.index, 1);
                console.log("cek ini",dataBencanaBaru);
            return {
                ...state,
                datBencana: dataBencanaBaru
            }
        case "SUNTING_BENCANA":
            let newBencanaSunting=state.dataBencana
            newBencanaSunting[action.payload.index].bencana = action.payload.bencana;
            newBencanaSunting[action.payload.index].deskripsi = action.payload.deskripsi;
            console.log(newBencanaSunting);
            return{
                dataBencana:newBencanaSunting
            }

        
        default:
            return state
    }
}

export default bencanaReducer