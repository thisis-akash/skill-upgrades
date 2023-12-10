/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';

import Title from './components/Title/Title';

function App() {
  const APP_TITLE = `Let's Explore`;

  return (
    <SafeAreaView>
      <Title title={APP_TITLE} />
    </SafeAreaView>
  );
}

export default App;
