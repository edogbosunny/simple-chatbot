import axios from 'axios';

export const getDiagnosis = (data) => async (dispatch) => {
  console.log(' i have been called from action', data);
  dataObject = ['back pain', 'cough', 'travel history']
  axios.post('https://diesease-symptoms-flask-model.herokuapp.com/predict',
    dataObject, auth = { user: 'Admin', pass: 'admin.password' })
    .then(response => {
      console.log('--->resp', response)
      return dispatch({
        type: 'GET_DIAGNOSIS',
        payload: {
          auth: data,
          payload: response.data
        }

      })
    })
};

export const saveInputData = (data) => async (dispatch) => {
  console.log('data-->', data)
  return dispatch({
    type: 'ADD_INPUT_DATA',
    inputData: data
  })
};