import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

const List = () => {
  const [countries, setCountries] = useState([]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text>{item.name}</Text>
        <hr style={{ backgroundColor: "black", width: 70, height: 2 }} />
        <Text>{item.capital}</Text>
        <hr style={{ backgroundColor: "black", width: 70, height: 2 }} />
        <Image style={styles.drapeau} source={{ uri: item.flag }}></Image>
      </View>
    );
  };

  useEffect(() => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setCountries(response);
      });
  });

  if (countries.length === 0) {
    return <Text>En cours de chargement</Text>;
  } else {
    return (
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      ></FlatList>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    paddingVertical: 10,
    border: "2px solid black",
    borderRadius: 20,
    width: 300,
  },
  drapeau: {
      width: 200,
      height: 100,
  }
});

export default List;
