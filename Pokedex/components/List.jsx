import React, { useState, useEffect } from "react";
import { View, Pressable, StyleSheet, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Pokemon from "./Pokemon";

const List = (props) => {
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setListPokemon(response.results);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => {
          props.onPress(item)
          console.log(item.name)
      }}>
        <Pokemon props={item}></Pokemon>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listPokemon}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      ></FlatList>
    </View>
  );
};

let { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        width: width,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        textAlign: 'center'
    }
})

export default List;
