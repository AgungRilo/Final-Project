import AuthReducer from './auth';
import UserReducer from './user';
import BencanaReducer from './bencana';
import ProvinsiReducer from './provinsi';
import KotaReducer from './kota';
import KecamatanReducer from './kecamatan';
import {createStore,combineReducers} from 'redux';


let store = createStore(combineReducers({
    AReducer: AuthReducer,
    UReducer: UserReducer,
    BReducer: BencanaReducer,
    PReducer: ProvinsiReducer,
    KReducer: KotaReducer,
    KecReducer:KecamatanReducer

}))

export default store