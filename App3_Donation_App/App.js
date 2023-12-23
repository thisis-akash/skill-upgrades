import { NavigationContainer } from '@react-navigation/native';
import React, { useRef, useEffect } from 'react';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigation from './navigation/RootNavigation';
import { checkToken } from './api/User';

const App = () => {

  const appState = useRef(AppState.currentState);

  useEffect(() => {

    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          await checkToken();
          // We are coming from background to the foreground
        }

        appState.current = nextAppState;
      },
    );

    // Application has rendered
    checkToken();

  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null} >

        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>

      </PersistGate>
    </Provider>
  );

}

export default App;
