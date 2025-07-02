import React, { useState } from 'react';
import { StyleSheet, Text,  SafeAreaView,  TextInput, TouchableOpacity } from 'react-native';


const InputText = () => {
  const [text, setText] = useState('');
  const [buttonText, setButtonText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Enter your text"
          style={styles.textInput}
          placeholderTextColor="#888"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setButtonText(text);
            setText('');
          }}
        >
          <Text style={styles.buttonText}>Show Button Text</Text>
        </TouchableOpacity>
        <Text style={styles.cardTitle}>{buttonText}</Text>
    </SafeAreaView>
  );
};

export default InputText;

const styles = StyleSheet.create({

  btn: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    color: 'black',
  },
  textInput: {
    color: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 8,
  },
  container: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  scrollContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 8,
    height: 120,
  },
    profileImage: {
    width: 94,
    height: 94,
    borderRadius: 50,
  },
  card: {
    backgroundColor: '#fff',
    padding: 3,
    marginVertical: 8,
    marginHorizontal: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black'
  },
});
