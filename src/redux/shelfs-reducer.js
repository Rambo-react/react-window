import shelfs from "../data/shelfs.json"


let InitialState = {
  shelfs: shelfs
}

const shelfsReducer = (state = InitialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

export default shelfsReducer