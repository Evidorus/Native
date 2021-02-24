import React, {useState} from "react";
import {StyleSheet,  TextInput } from "react-native";

const FormInput = (props) => {
  const [emailInput, setEmailInput] = useState(styles.inputInvalid);
  const [email, setEmail] = useState("");
  const validInputEmail = (text) => {
    if (text.length >= 6) {
      setEmailInput(styles.inputValid);
    } else {
      setEmailInput(styles.inputInvalid);
    }

    setEmail(text);
  };
  return (
    <TextInput
      value={email}
      style={emailInput}
      placeholder={props.placeholder}
      onChange={(event) =>  {
          console.log(event.nativeEvent.eventCount);
          console.log(event.nativeEvent.target);
          console.log(event.nativeEvent.text);
      }}
      onChangeText={(email) => {
        validInputEmail(email);
      }}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  inputInvalid: {
    marginBottom: 15,
    marginTop: 15,
    height: 50,
    width: 250,
    backgroundColor: "#30336B",
    color: "white",
    borderWidth: 2,
    borderColor: "red",
  },
  inputValid: {
    marginBottom: 15,
    marginTop: 15,
    height: 50,
    width: 250,
    backgroundColor: "#30336B",
    color: "white",
    borderWidth: 2,
    borderColor: "green",
  },
});

export default FormInput;