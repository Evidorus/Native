import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerText}>
        <Text style={styles.textMarge}>Je suis grand</Text>
        <Text style={styles.textMarge2}>Je suis centré</Text>
        <Text style={styles.textMarge3}>Je suis gras</Text>
        <Image
          style={styles.img}
          source={require("./images/konexio-logo_1.png")}
        ></Image>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
          }}
        ></Image>
        <Pressable
          onPress={() => {
            alert("Bien joué, tu veut casser ton écran ?");
          }}
        >
          <Text>Appuie sur moi hihihi</Text>
        </Pressable>
        {/* <ActivityIndicator size="large" color="orange"></ActivityIndicator> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    backgroundColor: "white",
  },
  textMarge: {
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30,
  },
  textMarge2: {
    marginTop: 80,
    marginBottom: 80,
    textAlign: "center",
  },
  textMarge3: {
    marginTop: 80,
    marginBottom: 80,
    fontWeight: "bold",
  },
  img: {
    height: 50,
  },
});
