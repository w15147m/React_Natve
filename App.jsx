import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import AppPort from './src/AppPort';
import InputText from './src/InputText';
const App = () => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello World</Text>
    <AppPort/>          
    <InputText/>          
  </SafeAreaView>
);

export default App;
