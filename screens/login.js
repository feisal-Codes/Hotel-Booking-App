import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  BackgroundImage,
  Pressable,
} from "react-native";
import CustomInput from "../components/input";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Button } from "@rneui/themed";
import { postLogin } from "../util/http";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/reducers/authSlice";
function Login({ navigation }) {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  //generic function that set userinput values, it keeps the state and changes only
  //the neccessary fields

  function handleOnchangeInput(inputIdentifier, enteredValue) {
    setErrors({
      email: "",
      password: "",
    });
    setInputValues(currentValues => {
      return { ...currentValues, [inputIdentifier]: enteredValue };
    });
  }

  function ValidateInputs() {
    if (
      (inputValues.email == "" || inputValues.email == undefined) &&
      (inputValues.password == "" || inputValues.password == undefined)
    ) {
      setErrors(currentValues => {
        return {
          email: "email is required",
          password: "password is required",
        };
      });

      return false;
    }
    if (inputValues.email == "" || inputValues.email == undefined) {
      setErrors(currentValues => {
        return {
          email: "email is required",
        };
      });

      return false;
    }

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputValues.email.match(mailformat)) {
      console.log("we are here");
      setErrors(currentValues => {
        return {
          email: "invalid email",
        };
      });

      return false;
    }

    if (inputValues.password == "" || inputValues.password == undefined) {
      setErrors(currentValues => {
        return {
          password: "password is required",
        };
      });

      return false;
    }

    //validate password length
    if (inputValues.password.length < 6) {
      setErrors(currentValues => {
        return {
          password: "password length is too short",
        };
      });

      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    const validate = ValidateInputs();
    console.log("****************************");
    if (!validate) {
      return;
    }
    //call backend api
    try {
      setIsLoading(true);
      const response = await postLogin(inputValues);
      //console.log(response);
      console.log("this is the response");
      if (!response || response == undefined) {
        throw response;
      }
      if (
        response.status == 401 ||
        response.status == 404 ||
        response.status == 503 ||
        response.status == 500
      ) {
        setIsLoading(false);
        throw response;
      }
      // console.log(response.data);
      if (response.data.token) {
        setIsLoading(false);
        setErrors({
          email: "",
          password: "",
        });
        dispatch(loginUser(response.data));
      }
    } catch (err) {
      console.log("this is the error response");
      // console.log(err);
      setIsLoading(false);
      console.log(err);
      setErrors({
        email: "",
        password: "",
      });
      console.log(err);
      if (typeof err.message !== "undefined") {
        console.log("%%%%%%%%%%%%%%%%%%");
        console.log(err);
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    }

    console.log("input" + inputValues.email);
    console.log("input2" + inputValues.password);
    console.log("*******************");
  }

  console.log("error object");
  if (errors) {
    console.log(errors);
  }

  function handleLogin() {
    navigation.navigate("register");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.signin}>Sign in to continue</Text>
          {errorMessage ? (
            <Text style={styles.error}>{errorMessage}</Text>
          ) : (
            <Text></Text>
          )}
        </View>
        <View style={styles.input}>
          <CustomInput
            inputConfig={{
              //   label: "email address",
              placeholder: "enter email",
              keyboardType: "email-address",
              autoCorrect: false,
              autoCapitalize: "none",
              autoComplete: "off",
              value: inputValues.email,
              errorStyle: { color: "red" },
              errorMessage: errors["email"] ? errors["email"] : "",
              onChangeText: handleOnchangeInput.bind(this, "email"),
            }}
          />

          <CustomInput
            inputConfig={{
              //   label: "password",
              placeholder: "enter password",
              // autoCorrect: false,
              // autoCapitalize: "none",
              // autoComplete: "off",
              errorStyle: { color: "red" },
              errorMessage: errors["password"] ? errors["password"] : "",
              value: inputValues.password,
              secureTextEntry: true,
              onChangeText: handleOnchangeInput.bind(this, "password"),
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Login"
            type="solid"
            disabled={isLoading}
            disabledStyle={styles.disabled}
            disabledTitleStyle={styles.disabledTitle}
            onPress={handleSubmit}
            color="#00308F"
            loading={isLoading}
          />
        </View>
        <View style={styles.registerContainer}>
          <Text>Don't Have an account?</Text>
          <Pressable onPress={handleLogin}>
            <Text style={styles.register}>Register</Text>
          </Pressable>
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
    backgroundColor: "whitesmoke",
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
    flexDirection: "row",
    alignItems: "center",
  },
  register: {
    color: "blue",
  },
  error: {
    color: "red",
    fontStyle: "italic",
    marginLeft: 10,
    marginTop: 10,
    textAlign: "center",
  },

  disabled: {
    backgroundColor: "#00308F",
  },
  disabledTitle: {
    color: "white",
  },
});
