import { updateObjectInArray } from "../components/utils/object-helper"
import products from "../data/products.json"

const CHANGE_SHELF = 'CHANGE_SHELF'
const CHANGE_GROUP = 'CHANGE_GROUP'

let InitialState = {
  products: products
}

const productReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CHANGE_SHELF: {
      return {
        ...state,
        products: updateObjectInArray(state.products, action.payload.productId, "id", { shelf_id: action.payload.shelfId })
      }
    }
    case CHANGE_GROUP: {

      return {
        ...state,
        products: updateObjectInArray(state.products, action.payload.productId, "id", { product_group_id: action.payload.productGroupId })
      }
    }

    default:
      return state
  }
}

export const changeShelf = (productId, shelfId) => {
  return ({ type: CHANGE_SHELF, payload: { productId, shelfId } })
}

export const changeProductGroup = (productId, productGroupId) => {
  return ({ type: CHANGE_GROUP, payload: { productId, productGroupId } })
}

export default productReducer