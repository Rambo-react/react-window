import { combineReducers, createStore } from "redux"
import filterReducer from "./filter-reducer"
import productGroupsReducer from "./productGroups-reducer"
import productReducer from "./products-reducer"
import shelfsReducer from "./shelfs-reducer"

let rootReducer = combineReducers({
    productGroups: productGroupsReducer,
    products: productReducer,
    shelfs: shelfsReducer,
    filter: filterReducer
})

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store