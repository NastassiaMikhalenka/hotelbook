import {combineReducers, createStore} from "redux";

import {hotels_reducer} from "./hotels_reducer";

let rootReducer = combineReducers({
    hotels: hotels_reducer,
})

export let store = createStore(rootReducer);

export type rootReducerType = ReturnType<typeof rootReducer>;

export type AppStoreType = typeof store