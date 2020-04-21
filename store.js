import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './src/reducers';

const middleware = [thunk];
const initialState = {};


const store = createStore(
  rootReducer /* preloadedState, */,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)
export default store;