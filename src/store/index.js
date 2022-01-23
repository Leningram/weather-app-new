import {options} from './options';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import loggerMiddleware from 'redux-logger'

const rootReducer = combineReducers({
    options: options.reducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = process.env.NODE_ENV ==='development' ? [loggerMiddleware] : [];

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares)
});

export const persist = persistStore(store)