import AuthReducer from './auth';
import UserReducer from './user';
import BencanaReducer from './bencana';
import ProvinsiReducer from './provinsi';
import KotaReducer from './kota';
import KecamatanReducer from './kecamatan';
import KelurahanReducer from './kelurahan';
import BantuanReducer from './bantuan';
import KegiatanReducer from './kegiatan';
import DetailReducer from './detail';
import { combineReducers } from "redux";


const reducer = combineReducers({
    AReducer: AuthReducer,
    UReducer: UserReducer,
    BReducer: BencanaReducer,
    PReducer: ProvinsiReducer,
    KReducer: KotaReducer,
    KecReducer:KecamatanReducer,
    KelReducer:KelurahanReducer,
    BanReducer:BantuanReducer,
    KegReducer:KegiatanReducer,
    DReducer:DetailReducer

});

export default reducer