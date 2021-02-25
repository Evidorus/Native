import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const Visu = ({ props }) => {
  const [pokemon, setPokemon] = useState([]);

  // useEffect(() => {
  //     fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
  //     .then((response) => {
  //         return response.json()
  //     })
  //     .then((response) => {
  //         setPokemon(response)
  //     })
  // })

  useEffect(() => {
    fetch(props.url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokemon(response);
      });
  });

  if (pokemon.length === 0) {
    return <Text>Chargement en cours</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagePokemon}
          source={{ uri: pokemon.sprites.front_shiny }}
        ></Image>
        <Text style={styles.white}>Name : {pokemon.name}</Text>
        <Text style={styles.white}>Height : {pokemon.height} m</Text>
        <Text style={styles.white}>Weight : {pokemon.weight} kg</Text>
        <Text style={styles.white}>
          Type :{" "}
          {pokemon.types
            .map((type) => {
              return type.type.name;
            })
            .join(", ")}
        </Text>
      </View>
    );
  }
};
let { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  imagePokemon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  container: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    marginTop: 30,
    marginBottom: 10,
  },
  white: {
    color: "white",
  },
});

export default Visu;
