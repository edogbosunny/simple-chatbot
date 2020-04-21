const initialState = {
  payload: {
    
  }
}

const diagnosisReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_DIAGNOSIS':
      return {
        ...state,
        paylaod: action.payload
      }
    default:
      return state
  }
}
export default diagnosisReducer;