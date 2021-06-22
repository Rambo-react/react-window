const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let InitialState = {
    productGroups: [
        {
          "id": 757,
          "name": "Chark A"
        },
        {
          "id": 758,
          "name": "Chark B"
        },
        {
          "id": 759,
          "name": "Chark C"
        },
        {
          "id": 760,
          "name": "Ost A"
        },
        {
          "id": 761,
          "name": "Ost B"
        },
        {
          "id": 762,
          "name": "Ost C"
        },
        {
          "id": 763,
          "name": "Glutenfritt/barnmat"
        },
        {
          "id": 764,
          "name": "Mejeri A"
        },
        {
          "id": 765,
          "name": "Mejeri B"
        },
        {
          "id": 766,
          "name": "Mejeri C"
        },
        {
          "id": 791,
          "name": "FГ¤rdigmat"
        }
      ],
    totalProductGroupsCount: 0,
    isFetchingProductGroups: true
}

const productGroupsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetchingProductGroups: action.isFetchingProductGroups }
        }
        default:
            return state
    }
}

//toggle Is Fetching Products Action Creator
export const toggleIsFetching = (isFetchingProductGroups) => {
    return ({ type: TOGGLE_IS_FETCHING, isFetchingProductGroups })
}


export default productGroupsReducer