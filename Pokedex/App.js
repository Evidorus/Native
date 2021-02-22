import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Apercu from "./Components/Apercu"
import List from "./Components/List"

export default function App() {

  return (
    <View style={styles.container}>
      <Apercu></Apercu>
      <List></List>
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
