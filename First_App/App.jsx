import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'

const users = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  bio: `This is a short bio for User ${i + 1}.`,
  image: `https://randomuser.me/api/portraits/men/${i % 100}.jpg`,
}))

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {users.map(user => (
          <View key={user.id} style={styles.card}>
            <Image source={{ uri: user.image }} style={styles.profileImage} />
            <Text style={styles.cardTitle}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.bio}>{user.bio}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '90%',
    alignItems: 'center',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  bio: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
  },
})