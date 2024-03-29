import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  
} from "react-native";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Features from "./features";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { getHotelsData } from "../store/reducers/hotelDataSlice";
import { image_base_url } from "../util/urls";
import { colors } from "../util/colors";

function Home({ navigation }) {
  const data = useSelector(state => state.hotel.data);
  const loading = useSelector(state => state.hotel.loading);
  const isSuccess = useSelector(state => state.hotel.isSuccess);

  const image = { uri: image_base_url + data.images.standard[0] };
  const height= Dimensions.get("window").height
  console.log("the height",height)
  function handlePress(name) {
    console.log("#####################################################");
    console.log(name);
    console.log("needed name");
    navigation.navigate(name);
  }

  return (
      <>
     <StatusBar
        backgroundColor={colors.primary400}
        style="light"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.main}>
      
        <ScrollView style={styles.main}>
          <View>
            <Image
            resizeMode="cover"
              source={require("../assets/images/hotel3.jpeg")}             
              //  source={require("../assets/images/hotel.jpg")}
              // source={image}
              style={[styles.image, {height: 0.32* height}]}
            />
          </View>
          <View style={styles.main_address}>
            {/* <Text style={styles.text}>{data.name}</Text> */}
            <Text style={styles.text}>New Hotel</Text>

            <View>
              <View style={styles.secondary_text}>
                <Ionicons name="location" size={18} color="gold" />
                <Text style={styles.text_space}>{data.location}</Text>
              </View>
              <View style={styles.secondary_text}>
                <Ionicons name="mail-outline" size={18} color="gold" />
                {/* <Text style={styles.text_space}>{data.socials.email}</Text> */}
                <Text style={styles.text_space}>feisalmib@gmail.com</Text>

              </View>
              <View style={styles.secondary_text}>
                <FontAwesome name="phone" size={18} color="gold" />
                <Text style={styles.text_space}>{data.contact}</Text>
              </View>
            </View>
            <View style={styles.icons}>
              <Text style={styles.secondary_text}>
                {data.socials.instagram && (
                  <FontAwesome name="instagram" size={20} color="red" />
                )}
              </Text>

              <Text style={styles.secondary_text}>
                {data.socials.instagram && (
                  <FontAwesome name="facebook" size={20} color="blue" />
                )}
              </Text>
              <Text style={styles.secondary_text}>
                {data.socials.instagram && (
                  <FontAwesome name="twitter" size={20} color="skyblue" />
                )}
              </Text>
              <Text style={styles.secondary_text}>
                {data.socials.instagram && (
                  <FontAwesome name="youtube" size={20} color="red" />
                )}
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5 }}>
            <Features onPress={handlePress} />
          </View>
        </ScrollView>
      </SafeAreaView>
      </>
    
  );
}


export default Home;

const styles = StyleSheet.create({
  main: {
    // padding: 20,
    paddingTop: 0,
    paddingHorizontal: 0,
    flex: 1,
    // backgroundColor:colors.primary500
  },
  main_address: {
    backgroundColor: colors.primary400,
    padding: 20,
    marginHorizontal: 10,
    marginTop: -20,
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    padding: 5,
    color:"#ffffff"
  },
  secondary_text: {
    fontSize: 16,
    padding: 5,
    flexDirection: "row",
    
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "flex-end",
    marginTop: 25,
  },
  text_space: {
    marginLeft: 10,
    color:"#ffffff"

  },
  image:{
    width:"100%",
    flex:1,
    marginTop:10
    
  }
});
