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
  import { Button } from "react-native-paper";
  import { useState } from "react";
  
  function Register({navigation}) {
    const [inputValues, setInputValues] = useState({
      username: '',
      password: '',
      confirmpassword:'',
      phonenumber:''
    });
   
    //generic function that set userinput values, it keeps the state and changes only
    //the neccessary fields
  
    function handleOnchangeInput(inputIdentifier, enteredValue) {
      setInputValues(currentValues => {
        return { ...currentValues, [inputIdentifier]: enteredValue };
      });
    }
  
    function handleSubmit() {
      console.log(inputValues);
      

      console.log("*******************");
    }
  function handleLogin(){
    navigation.navigate("login")
  }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.signin}>Register to get started </Text>
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
                label: "phone number",
                placeholder: "enter phonenumber",
                keyboardType:"number-pad",
                autoCorrect: false,
                autoCapitalize: "none",
                autoComplete: "off",
                value: inputValues.phonenumber,
                onChangeText: handleOnchangeInput.bind(this, "phonenumber"),
              }}
            />
            <CustomInput
              inputConfig={{
                label: "password",
                placeholder: "enter password",
                // autoCorrect: false,789
                // autoCapitalize: "none",
                // autoComplete: "off",
                value: inputValues.password,
                onChangeText: handleOnchangeInput.bind(this, "password"),
              }}
            />
             <CustomInput
              inputConfig={{
                label: "confirm password",
                placeholder: "confirm password",
                // autoCorrect: false,
                // autoCapitalize: "none",
                // autoComplete: "off",
                value: inputValues.confirmpassword,
                onChangeText: handleOnchangeInput.bind(this, "confirmpassword"),
              }}
            />
          </View>
          <View style={styles.button}>
            <Button mode="contained" onPress={handleSubmit} color="blue">
              Register
            </Button>
          </View>
          <View style={styles.registerContainer}>
  
            <Text>
              Have an account?{" "}
              <Pressable onPress={handleLogin}><Text style={styles.register}>Login</Text></Pressable>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  export default Register;
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
  