import AuthReducer from './auth';
import UserReducer from './user';
import {createStore,combineReducers} from 'redux';


let store = createStore(combineReducers({
    AReducer: AuthReducer,
    UReducer: UserReducer
}))

export default store