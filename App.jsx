import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';

const users = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  image: `https://randomuser.me/api/portraits/men/${i % 100}.jpg`,
}));

const App = () => {
  const [text, setText] = useState('');
  const [buttonText, setButtonText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        horizontal
        contentContainerStyle={styles.scrollContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.profileImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.bodyContainer}>
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
      </View>
    </SafeAreaView>
  );
};

export default App;

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
    width: '100%',
    textAlign: 'center',
    padding: 10,
    color: 'black'
  },
  textInput: {
    color: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 8,
  },
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 8,
    height: 120,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 32,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
    color: 'black'
  },
});
