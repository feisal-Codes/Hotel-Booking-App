import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function Features({onPress}) {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.main}>
        <View style={styles.main_container}>
          <LinearGradient style={styles.parent} colors={["#f22952", "red"]}>
            <Pressable
              style={styles.sParent}
              onPress={() => {
              console.log("hey")
              }}
            > 
              <Ionicons name="ios-calendar-outline" size={40} style={styles.icons} />
              <Text style={styles.text}>Book Now!</Text>
            </Pressable>
          </LinearGradient>
          <LinearGradient style={styles.parent} colors={["blue", "#00308F"]}>
          <Pressable
              style={styles.sParent}
              onPress={() => {
                onPress("Roomtypes")
              }}
            >
            <FontAwesome name="hotel" size={40} style={styles.icons} />
            <Text style={styles.text}>Rooms</Text>
            </Pressable>
          </LinearGradient>
          <LinearGradient style={styles.parent} colors={["#32cd32", "green"]}>
          <Pressable
              style={styles.sParent}
              onPress={() => {
                alert("pressed");
              }}
            >
            <FontAwesome name="wifi" size={40} style={styles.icons} />
            <Text style={styles.text}>Facilities</Text>
            </Pressable>
          </LinearGradient>
        </View>
        <View style={styles.main_container}>

          <LinearGradient style={styles.parent} colors={["red", "#f22952"]}>
          <Pressable
              style={styles.sParent}
              onPress={() => {
                onPress("Location")
              }}
              android_ripple={{color:"white"}}
            >
             <Ionicons name="location" size={40} style={styles.icons} />
              <Text style={styles.text}>Location</Text>
            </Pressable>
          </LinearGradient>
          <LinearGradient style={styles.parent} colors={["#0066b2", "#002D62"]}>
          <Pressable
              style={styles.sParent}
              onPress={() => {
                alert("pressed");
              }}
              android_ripple={{color:"white"}}
            >
            <FontAwesome name="mobile" size={40} style={styles.icons} />
            <Text style={styles.text}>Contact Us</Text>
            </Pressable>
          </LinearGradient>

          <LinearGradient style={styles.parent} colors={["#93C572", "#568203"]}>
          <Pressable
              style={styles.sParent}
              onPress={() => {
                alert("pressed");
              }}
            >
            <FontAwesome name="info" size={40} style={styles.icons} />
            <Text style={styles.text}>About us</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
}

export default Features;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
    marginVertical:10
    // justifyContent:"space-around"
  },
  main_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
 
  parent: {
    height: 80,
    width: "23%",
    marginRight: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  sParent:{
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    color: "#ffffff",
  },
  text: {
    color: "#ffffff",
  },
});
