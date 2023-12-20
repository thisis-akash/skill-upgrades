import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import MainNavigation from './navigation/MainNavigation';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null} >

        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>

      </PersistGate>
    </Provider>
  );

}

export default App;
