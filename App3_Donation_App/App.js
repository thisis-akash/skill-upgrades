import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';

import MainNavigation from './navigation/MainNavigation';
import store from './redux/store';

const App = () => {

  return (
    <Provider store={store}>

      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>

    </Provider>
  );

}

export default App;
