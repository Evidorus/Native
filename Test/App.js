import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container2}>
        <Text style={[styles.verticalMargin, styles.fontSize]}>
          Je suis grand
        </Text>
        <Text style={[styles.verticalMargin, styles.textAlign]}>
          Je suis centrer
        </Text>
        <Text style={[styles.verticalMargin, styles.textGras]}>
          Je suis gras
        </Text>
        <Image
          style={{ width: 124, height: 40 }}
          source={{
            uri:
              "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
          }}
        ></Image>
        <Image
          style={[styles.verticalMargin, { width: 124, height: 40 }]}
          source={require("./konexio-logo_1.png")}
        ></Image>
        <Pressable
          onPress={() => {
            alert("Doucement ! Tu vas casser ton telephone");
          }}
        ><Text>Clique sur moi</Text></Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "white",
  },
  verticalMargin: {
    marginVertical: 80,
  },
  fontsize: {
    fontSize: 30,
  },
  textAlign: {
    textAlign: "center",
  },
  textGras: {
    fontWeight: "bold",
  },
});
