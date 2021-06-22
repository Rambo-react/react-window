import { combineReducers, createStore } from "redux"
import productGroupsReducer from "./productGroups-reducer"
import productReducer from "./products-reducer"
import shelfsReducer from "./shelfs-reducer"

let rootReducer = combineReducers({
    productGroups: productGroupsReducer,
    products: productReducer,
    shelfs: shelfsReducer
})

let store = createStore(rootReducer)

export default store