const FIND_PRODUCT="FIND_PRODUCT"

let InitialState = ''

const filterReducer = (state = InitialState, action) => {
    switch (action.type) {
        case FIND_PRODUCT: {
            return action.payload
        }
        default:
            return state
    }
}

export const searchProducts = (payload) => {
    return ({ type: FIND_PRODUCT, payload })
}

export default filterReducer