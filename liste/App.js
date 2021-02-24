import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Liste des pays avec le nom, la capital et le drapeau</Text>
      <List></List>
      <StatusBar style="auto" />
    </View>
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
