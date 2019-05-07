import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers'
const persistConfig = {
    key: 'root',
    storage,
}

function reduxMulti ({dispatch}) {
    return next => action =>
        Array.isArray(action)
            ? action.filter(Boolean).map(dispatch)
            : next(action)
}
const persistedReducer = persistReducer(persistConfig, reducer)
//export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const store = createStore(reducer, applyMiddleware(thunk,reduxMulti))
export const persistor = persistStore(store)
