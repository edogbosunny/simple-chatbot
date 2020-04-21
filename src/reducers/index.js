import { combineReducers } from 'redux';
import getDiagnosis from './diagnosis';
import inputDataReducer from './bot-input';

// console.log('i am at the index')
export default combineReducers({
   getDiagnosis,
   inputDataReducer
})