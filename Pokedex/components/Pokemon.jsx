import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Pokemon = ({ props }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(props.url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        //   console.log(response)
        setImage(response.sprites.front_shiny);
      });
  }, [props]);

  return (
    <View>
      <Image style={styles.imagePokemon} source={{uri:`${image}`}}></Image>
      <Text style={styles.white}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    imagePokemon: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    white: {
        color: 'white',
        textAlign: 'center'
    },
})

export default Pokemon;
