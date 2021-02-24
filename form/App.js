import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

import FormInput from "./components/FormInput";

export default function App() {
  const [userLogin, setUserLogin] = useState(false);

  return (
    <View style={styles.container}>
      {userLogin ? (
        <Text style={{color: "white"}}>Conecté</Text>
      ) : (<View>
        <Text>Loggin</Text>
        <FormInput
          placeholder={"email"}
          keyboardType={"email-address"}
        ></FormInput>
        <FormInput
          placeholder={"password"}
          secureTextEntry={true}
        ></FormInput>
        <Pressable style={styles.loginButton} onPress={() => setUserLogin(true)}>
          <Text style={{ color: "white" }}>Login</Text>
        </Pressable>
      </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  // #130F40
  // #30336B
  container: {
    flex: 1,
    backgroundColor: "#130F40",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: "#30336b",
    width: 350,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});