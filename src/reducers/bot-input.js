const initialState = {
  inputData: {}
}

const inputDataReducer = (state = initialState, action) => {
  console.log('action---->', action)
  switch (action.type) {
    case 'ADD_INPUT_DATA':
      const a = {
        ...state,
        inputData: action.inputData
      }
      return a;
    default:
      return state
  }
}
export default inputDataReducer;
