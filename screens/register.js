import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  BackgroundImage,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import CustomInput from "../components/input";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Button } from "@rneui/themed";
import { postRegister } from "../util/http";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/reducers/authSlice";

function Register({ navigation }) {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
    firstname: "",
    lastname: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
    firstname: "",
    lastname: "",
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
      firstname: "",
      confirmpassword: "",
      phonenumber: "",
      lastname: "",
    });
    setInputValues(currentValues => {
      return { ...currentValues, [inputIdentifier]: enteredValue };
    });
  }

  function ValidateInputs() {
    if (
      (inputValues.email == "" || inputValues.email == undefined) &&
      (inputValues.password == "" || inputValues.password == undefined) &&
      (inputValues.firstname == "" || inputValues.firstname == undefined) &&
      (inputValues.firstname == "" || inputValues.firstname == undefined)&&
      (inputValues.confirmpassword == "" ||
        inputValues.confirmpassword == undefined) &&
      (inputValues.phonenumber == "" || inputValues.phonenumber == undefined)
    ) {
      setErrors(currentValues => {
        return {
          email: "email is required",
          password: "password is required",
          firstname: "name is required",
          phonenumber: "phone number is required",
          confirmpassword: "confirm password is required",
          lastname: "name is required",
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
    //validate email

    //validate password length
    if (inputValues.password.length < 6) {
      setErrors(currentValues => {
        return {
          password: "password length is too short",
        };
      });

      return false;
    }
    //compare passwords

    if (inputValues.password !== inputValues.confirmpassword) {
      setErrors(currentValues => {
        return {
          confirmpassword: "password dont match",
        };
      });

      return false;
    }

    return true;
  }

  async function handleSubmit(e) {
    const validate = ValidateInputs();
    console.log("****************************");
    // console.log(e);
    if (!validate) {
      return;
    }
    //call backend api
    try {
      setIsLoading(true);
      const response = await postRegister(inputValues);
      //console.log(response);
      // console.log("this is the response");
      // if (response.status == 401 || response.status == 404) {
      //   setIsLoading(false);
      //   throw response;
      // }
      // console.log(response.data);
      // if (response.data.token) {
      //   setIsLoading(false);
      //   setErrors({
      //     email: "",
      //     password: "",
      //   });
      //   dispatch(loginUser(response.data));
      // }
    } catch (err) {
      console.log("this is the error response");
      // console.log(err);

      console.log(err);
      // setErrors({
      //   email: "",
      //   password: "",
      // });
      // setErrorMessage(err.message);
    }
    console.log("*******************");
  }

  console.log("error object");
  if (errors) {
    console.log(errors);
  }

  function handleLogin() {
    navigation.navigate("login");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.signin}>Register to get started</Text>
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
                placeholder: "enter first name",
                keyboardType: "default",
                autoCorrect: false,
                autoCapitalize: "none",
                autoComplete: "off",
                value: inputValues.firstname,
                errorStyle: { color: "red" },
                errorMessage: errors["firstname"] ? errors["firstname"] : "",
                onChangeText: handleOnchangeInput.bind(this, "firstname"),
              }}
            />
            <CustomInput
              inputConfig={{
                //   label: "email address",
                placeholder: "enter last name",
                keyboardType: "default",
                autoCorrect: false,
                autoCapitalize: "none",
                autoComplete: "off",
                value: inputValues.lastname,
                errorStyle: { color: "red" },
                errorMessage: errors["lastname"] ? errors["lastname"] : "",
                onChangeText: handleOnchangeInput.bind(this, "lastname"),
              }}
            />
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
                //   label: "email address",
                placeholder: "enter phone number",
                keyboardType: "number-pad",
                autoCorrect: false,
                autoCapitalize: "none",
                autoComplete: "off",
                value: inputValues.phonenumber,
                errorStyle: { color: "red" },
                errorMessage: errors["phonenumber"]
                  ? errors["phonenumber"]
                  : "",
                onChangeText: handleOnchangeInput.bind(this, "phonenumber"),
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
            <CustomInput
              inputConfig={{
                //   label: "password",
                placeholder: "confirm password",
                // autoCorrect: false,
                // autoCapitalize: "none",
                // autoComplete: "off",
                errorStyle: { color: "red" },
                errorMessage: errors["confirmpassword"]
                  ? errors["confirmpassword"]
                  : "",
                value: inputValues.confirmpassword,
                secureTextEntry: true,
                onChangeText: handleOnchangeInput.bind(this, "confirmpassword"),
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Register"
              type="solid"
              // disabled={isLoading}
              disabledStyle={styles.disabled}
              disabledTitleStyle={styles.disabledTitle}
              onPress={handleSubmit}
              color="#00308F"
              // loading={isLoading}
            />
          </View>
          <View style={styles.registerContainer}>
            <Text> Have an account?</Text>
            <Pressable onPress={handleLogin}>
              <Text style={styles.register}>Login</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default Register;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // justifyContent: "center",
    // backgroundColor: "red",
    backgroundColor: "whitesmoke",
    marginTop: 0,
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
    marginTop: 40,

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
