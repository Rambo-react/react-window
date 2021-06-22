const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let InitialState = {
    shelfs: [
        {
          "id": 1414,
          "name": "FГ¤rdigmat"
        },
        {
          "id": 1415,
          "name": "Ost"
        },
        {
          "id": 1416,
          "name": "Sill/kaviar"
        },
        {
          "id": 1417,
          "name": "Korv/kГ¶ttbullar fГ¤rsk pasta"
        },
        {
          "id": 1419,
          "name": "FГ¤rsk ost"
        },
        {
          "id": 1420,
          "name": "PГҐlГ¤gg"
        },
        {
          "id": 1421,
          "name": "Glutenfritt"
        },
        {
          "id": 1422,
          "name": "Barnmat"
        },
        {
          "id": 1423,
          "name": "SmГ¶r/laktosfritt"
        },
        {
          "id": 1424,
          "name": "MjГ¶lk/fil"
        },
        {
          "id": 1425,
          "name": "Ej kylda juicer"
        },
        {
          "id": 3476,
          "name": "SГҐser, pulled pork"
        },
        {
          "id": 3478,
          "name": "HГҐrdost"
        },
        {
          "id": 3479,
          "name": "Veggo"
        },
        {
          "id": 3480,
          "name": "Mackkyl"
        }
      ],
    totalShelfsCount: 0,
    isFetchingShelfs: true
}

const shelfsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetchingShelfs: action.isFetchingShelfs }
        }
        default:
            return state
    }
}

//toggle Is Fetching Products Action Creator
export const toggleIsFetching = (isFetchingShelfs) => {
    return ({ type: TOGGLE_IS_FETCHING, isFetchingShelfs })
}


export default shelfsReducer