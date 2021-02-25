import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Visu from "./components/Visu";
import List from "./components/List";

export default function App() {
  const [pokemon, setPokemon] = useState({
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  });

  let {height, width,} = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <Visu style={styles.visu} props={pokemon}></Visu>
        <List style={styles.list} onPress={setPokemon}></List>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    // width: 300
  },
  list: {
    backgroundColor: 'red'
  },
  visu: {
    backgroundColor: 'black'
  }
});
