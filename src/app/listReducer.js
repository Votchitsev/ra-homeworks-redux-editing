const initialState = {
  list: [],
}

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case 'list/add': {
      return {...state, list: action.payload()}
    }
    default: return state;
  }
} 