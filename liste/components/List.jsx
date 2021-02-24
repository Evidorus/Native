import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Platform,
} from "react-native";
import { SvgCssUri } from "react-native-svg";

const List = () => {
  const [countries, setCountries] = useState([]);

  // const [width, setWidth] = useState < number > window.innerWidth;
  // function handleWindowSizeChange() {
  //   setWidth(window.innerWidth);
  // }
  // useEffect(() => {
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   };
  // }, []);

  // const isMobile: Platform.OS === 'android'

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text>Nom : {item.name}</Text>
        <Text>Capital : {item.capital}</Text>
        <Text>
          {Platform.OS === "android" ? (
            <SvgCssUri
              style={[{ width: 200, height: 100, resizeMode: "contain" }]}
              uri={`${item.flag}`}
            ></SvgCssUri>
          ) : (
            <Image style={styles.drapeau} source={{ uri: item.flag }}></Image>
          )}
        </Text>
        {/* <Image style={styles.drapeau} source={{uri:item.flag}}></Image>
        <SvgUri width="100" height="100" uri={`${item.flag}`}></SvgUri> */}
      </View>
    );
  };

  useEffect(() => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCountries(response);
      });
  }, []);

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
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    width: 300,
  },
  drapeau: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
});

export default List;
