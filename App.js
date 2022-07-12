import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import Main from './src/components/Main';
import AddGasto from './src/components/addGasto';
import theme from './src/theme';
import Constants from 'expo-constants';
import CalendarScreen from './src/components/calendarScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer >
      
      <Stack.Navigator screenOptions={
        { headerShown: false,
      }} >
        <Stack.Screen name="home" component={Main} />
        <Stack.Screen name="addGasto" component={AddGasto} />
        <Stack.Screen name="calendarScreen" component={CalendarScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}