import React from "react";
import { View, Text, Image, StyleSheet,ScrollView } from "react-native";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Features from "./features";













function Home({navigation}) {

function handlePress(name,val){
   navigation.navigate(name,val)
}

  return (
    <>
     
      <ScrollView style={styles.main}>
        <View>
          <Image
            source={require("../assets/images/hotel.jpg")}
            style={{ width: "100%", height: 250 }}
          />
        </View>
        <View style={styles.main_address}>
          <Text style={styles.text}>Sakina Hotel</Text>
          <View>
            <Text style={styles.secondary_text}>
              <Ionicons name="location" size={20} color="green" /> Eastleigh 6th
              Street, Opposite sakina hospital
            </Text>
            <Text style={styles.secondary_text}>
              <Ionicons name="mail-outline" size={20} color="green" />{" "}
              info@sakinahotel.com{" "}
            </Text>
            <Text style={styles.secondary_text}>
              <FontAwesome name="phone" size={20} color="green" /> 0722978580
            </Text>
          </View>
          <View style={styles.icons}>
            <Text style={styles.secondary_text}>
              <FontAwesome name="whatsapp" size={20} color="green" />
            </Text>
            <Text style={styles.secondary_text}>
              <FontAwesome name="instagram" size={20} color="orange" />
            </Text>
            <Text style={styles.secondary_text}>
              <FontAwesome name="facebook" size={20} color="blue" />
            </Text>
            <Text style={styles.secondary_text}>
              <FontAwesome name="twitter" size={20} color="skyblue" />
            </Text>
            <Text style={styles.secondary_text}>
              <FontAwesome name="youtube" size={20} color="red" />
            </Text>
          </View>
        </View>
        <View  style={{flex:1, padding:5}}>
          <Features onPress={handlePress}/>
        </View>
      </ScrollView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  main: {
    padding: 20,
    paddingTop:0,
    paddingHorizontal: 0,
    flex: 1,
  },
  main_address: {
  
    backgroundColor:"#f5f6f7",
    padding: 20,
    marginHorizontal: 10,
    marginTop: -20,
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    padding: 5,
  },
  secondary_text: {
    fontSize: 16,
    padding: 5,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "flex-end",
    marginTop: 25,
  },
});
