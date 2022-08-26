import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {StyleSheet,Text,View,TextInput,Button,Image,FlatList,Pressable,ScrollView,} from "react-native";
import Home from "./components/home";
import RoomType from "./components/roomTypes";
import colors from "./util/colors";

export default function App() {
  return (
    <>
    
      <ScrollView> 
        <View style={styles.main}>
          <Home />

        </View>
                {/* <RoomType/> */}
          <StatusBar style="dark" />


      </ScrollView>



    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#e6e9ed",
    
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "skyblue",
//   },
//   firstContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 20,
//     alignItems: "center",
//     marginHorizontal: 6,
//     flex: 1,
//     color: "#ffffff",
//   },
//   text: {
//     color: "white",
//     fontSize: 22,
//   },

//   input: {
//     flex: 1,
//     color: "#ffffff",
//     backgroundColor: "blue",
//     marginRight: 5,
//     fontSize: 21,
//     padding: 10,

//     borderRadius: 10,
//   },
//   button: {
//     padding: 6,
//     backgroundColor: "blue",
//     borderRadius: 6,
//   },

//   sndContainer: {
//     flex: 5,
//   },
//   greetingsCont: {
//     backgroundColor: "blue",
//     padding: 10,
//     elevation: 3,

//     margin: 5,
//     borderRadius: 10,
//   },
// });
