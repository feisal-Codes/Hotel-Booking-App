import { View, Text, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';
import React from "react";

const CustomInput = ({ inputConfig }) => {
  return (
    <View style={styles.inputContainer}>
      {/* <Text>{inputConfig.label}</Text> */}
      <TextInput   style={styles.input} {...inputConfig} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    padding: 5,
    // backgroundColor: "silver",
    // marginHorizontal:5,
    marginHorizontal:10,
    // borderBottomWidth:1,
    // borderBottomColor:"#000",
    
    
   
    
  },
  inputContainer:{
  }
});
