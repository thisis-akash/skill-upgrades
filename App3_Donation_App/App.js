/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import MainNavigation from './navigation/MainNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );

}

export default App;
