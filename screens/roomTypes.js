import { useEffect, useState } from "react";
import { Button, Badge } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Pressable,
  Alert,
} from "react-native";

import { getRoomsData } from "../util/http";

const RoomType = () => {
  const Navigate = useNavigation();

  const [sdata, setSdata] = useState(null);
  const [ddata, setDdata] = useState(null);
  // const [edata, setEdata] = useState(null);
  const [vdata, setVdata] = useState(null);

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchData = async () => {
    // const executiveroom = await getRoomsData("executive");

    const standardroom = await getRoomsData("standard");
    const deluxeroom = await getRoomsData("deluxe");
    const viproom = await getRoomsData("vip");

    setSdata(standardroom);
    setDdata(deluxeroom);
    // setEdata(executiveroom)
    setVdata(viproom);
  };

  if (!sdata || !vdata || !ddata) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <ScrollView style={{ height: "100%" }}>
        <Pressable
          onPress={() => {
            Navigate.navigate("details", {
              data: sdata.data,
            });
          }}
        >
          <ImageBackground
            style={styles.parent}
            source={require("../assets/images/hotel.jpg")}
            resizeMode="cover"
          >
            <View style={styles.container}>
              <Text style={styles.textContainer}>Standard</Text>

              <Text style={styles.textContainer}>Price:{sdata.price}</Text>
            </View>
          </ImageBackground>
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert("clicked");
          }}
        >
          <ImageBackground
            style={styles.parent}
            source={require("../assets/images/hotel.jpg")}
            resizeMode="cover"
          >
            <View style={styles.container}>
              <Text style={styles.textContainer}>Deluxe</Text>

              <Text style={styles.textContainer}>Price:{ddata.price}</Text>
            </View>
          </ImageBackground>
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert("clicked");
          }}
        >
          <ImageBackground
            style={styles.parent}
            source={require("../assets/images/hotel.jpg")}
            resizeMode="cover"
          >
            <View style={styles.container}>
              <Text style={styles.textContainer}>Executive</Text>

              <Text style={styles.textContainer}>Price:19000</Text>
            </View>
          </ImageBackground>
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert("clicked");
          }}
        >
          <ImageBackground
            style={styles.parent}
            source={require("../assets/images/hotel.jpg")}
            resizeMode="cover"
          >
            <View style={styles.container}>
              <Text style={styles.textContainer}>VIP</Text>

              <Text style={styles.textContainer}>Price:{vdata.price}</Text>
            </View>
          </ImageBackground>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default RoomType;

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    height: "100%",
    flex: 1,
  },
  container: {
    backgroundColor: "blue",
    padding: 5,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  parent: {
    flex: 1,
    marginHorizontal: 10,
    height: 200,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    backgroundColor: "#ffffff",
    padding: 5,
  },
  textContainer: {
    color: "#ffff",
  },
});
