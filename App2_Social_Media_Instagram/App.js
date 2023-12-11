/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, View, TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Title from './components/Title/Title';
import globalStyle from './assets/styles/globalStyle';

function App() {
  const APP_TITLE = `Let's Explore`;

  return (
    <SafeAreaView>

      <View style={globalStyle.header}>
        <Title title={APP_TITLE} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color='#898DAE' size={20} />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

export default App;
