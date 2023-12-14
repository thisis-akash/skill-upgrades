/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from './navigation/MainNavigation';

function App() {

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );

}

export default App;
