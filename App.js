import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import MainComponent from './Components/Main';

// 1. Create Base Reducer
const reducer = ( state = "Rany", action ) => {
  return state;
}

// 2. Create the store
const store = createStore( reducer );

export default function App() {
  return (
    <Provider store={ store }>
      <MainComponent />
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
