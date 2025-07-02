import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import AppPort from './src/AppPort';
const App = () => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello World</Text>
    <AppPort/>
  </SafeAreaView>
);

export default App;
