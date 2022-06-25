import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import Main from './src/components/Main';
import theme from './src/theme';

export default function App() {
  console.log('interesante')
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style={{backgroundColor: '#000'}} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
