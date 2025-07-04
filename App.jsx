import React from 'react';
import { Text, SafeAreaView, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AppPort from './src/AppPort';
import InputText from './src/InputText';
import { createStackNavigator } from '@react-navigation/stack';


// const Stack = createStackNavigator();
const App = () => (
  <SafeAreaView style={styles.container}>
    <AppPort />
    <TouchableOpacity
      style={styles.btn}
      >
      <Text style={styles.btnText}>Show Button Text</Text>
    </TouchableOpacity>
    <InputText />
  </SafeAreaView>
);

export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  btnText: {
    color: '#f2f2f2'
  },
  btn: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#007AFF',
    alignItems: 'center',

  },
})