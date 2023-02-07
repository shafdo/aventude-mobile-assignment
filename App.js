import React from 'react';
import AppNavigationContainer from './src/navigations';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigationContainer></AppNavigationContainer>
    </Provider>
  );
}
