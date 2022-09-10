import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  BackgroundImage,
} from "react-native";
import CustomInput from "../components/input";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";
import { useState } from "react";

function Login() {
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

  //generic function that set userinput values, it keeps the state and changes only
  //the neccessary fields

  function handleOnchangeInput(inputIdentifier, enteredValue) {
    setInputValues(currentValues => {
      return { ...currentValues, [inputIdentifier]: enteredValue };
    });
  }

  function handleSubmit() {
    console.log("input" + inputValues.username);
    console.log("input2" + inputValues.password);
    console.log("*******************");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.signin}>Sign in to continue</Text>
        </View>
        <View style={styles.input}>
          <CustomInput
            inputConfig={{
              label: "email address",
              placeholder: "enter username",
              keyboardType: "email-address",
              autoCorrect: false,
              autoCapitalize: "none",
              autoComplete: "off",
              value: inputValues.username,
              onChangeText: handleOnchangeInput.bind(this, "username"),
            }}
          />

          <CustomInput
            inputConfig={{
              label: "password",
              placeholder: "enter password",
              // autoCorrect: false,
              // autoCapitalize: "none",
              // autoComplete: "off",
              value: inputValues.password,
              onChangeText: handleOnchangeInput.bind(this, "password"),
            }}
          />
        </View>
        <View style={styles.button}>
          <Button mode="contained" onPress={handleSubmit} color="blue">
            Login
          </Button>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.register}>Forgot password?</Text>

          <Text>
            Dont have an account yet?{" "}
            <Text style={styles.register}>Register</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // justifyContent: "center",
    // backgroundColor: "red",
    backgroundColor: "#e6e9ed",
    paddingTop: 20,
    marginTop: 100,
  },
  input: {
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  signin: {
    color: "blue",
    // padding:5,

    textAlign: "center",
  },
  registerContainer: {
    marginLeft: 10,
  },
  register: {
    color: "blue",
  },
});
