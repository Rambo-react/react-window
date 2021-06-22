import productGroups from "../data/product_groups.json"

let InitialState = {
    productGroups
}

const productGroupsReducer = (state = InitialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default productGroupsReducer