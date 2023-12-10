/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image
} from 'react-native';
import CustomText from './components/CustomText/CustomText';
import LiveText from './components/LiveText/LiveText';
import OTPBox from './components/OTPBox/OTPBox';
import Joke from './components/Joke/Joke';

function App() {
  const APP_TITLE = 'APP 1: BASIC COMPONENTS\nMy First Cross Platform Mobile Application';

  return (
    <SafeAreaView>
      <ScrollView>

        <View style={{
          borderWidth: 7, padding: 10, borderColor: 'orange',
          backgroundColor: 'green'
        }}>

          <Text style={{
            textAlign: 'center', fontWeight: 'bold', color: 'white',
            fontSize: 18
          }}>
            {APP_TITLE}
          </Text>

        </View>


        <View style={{
          margin: 2, borderWidth: 10, padding: 10, borderColor: 'blue',
          backgroundColor: 'yellow'
        }}>
          <Text style={{ fontWeight: 'bold', color: 'magenta', fontSize: 25 }}>
            Hello World with inline styling
          </Text>
        </View>


        <Pressable>
          <CustomText>Show Alert</CustomText>
        </Pressable>


        <View style={{ margin: 2 }}>
          <Image source={require('./assets/images/cake.png')} style={{ width: 100, height: 100 }} ></Image>
          <Text>Image from assets folder</Text>
        </View>


        <LiveText></LiveText>


        <OTPBox></OTPBox>


        <Joke></Joke>

      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
