/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import store from './store'
import { name as appName } from './app.json';
import Provider from 'react-redux/lib/components/Provider';

window.store = store;
const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
AppRegistry.registerComponent(appName, () => ReduxApp);
