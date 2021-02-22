import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import reducer from './reducer';
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist : ['AReducer'],
  blacklist : ['UReducer','BReducer','PReducer','KReducer','KecReducer','KelReducer','BanReducer','KegReducer','DReducer']
}

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

