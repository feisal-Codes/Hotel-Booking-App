import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RoomAmenities from "../components/amenities";
import { Button, Chip } from "@rneui/themed";

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
  SafeAreaView,
} from "react-native";

import { getRoomsData } from "../util/http";
import { useDispatch, useSelector } from "react-redux";
import { updateRoomData } from "../store/reducers/roomsDataSlice";
import { image_base_url } from "../util/urls";

const RoomType = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigation();
  // const [sdata, setSdata] = useState(null);
  // const [ddata, setDdata] = useState(null);
  // // const [edata, setEdata] = useState(null);
  // const [vdata, setVdata] = useState(null);

  const state = useSelector(state => {
    return state.rooms;
  });
  console.log(state);
  const { data, loading, isSuccess } = state;

  const images= useSelector(state=>{ return state.hotel.data.images})
  console.log(images)
  console.log("*****************************************")
  // console.log("data needed is here");
  // console.log(data);

  // console.log("data needed is here");

  // console.log(sdata);
  // useEffect(() => {
  //   try {
  //     // fetchData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // const fetchData = async () => {
  //   // const executiveroom = await getRoomsData("executive");

  //   // const standardroom = await getRoomsData("standard");
  //   // const deluxeroom = await getRoomsData("deluxe");
  //   // const viproom = await getRoomsData("vip");

  //   // if (typeof standardroom.data !== "undefined") {
  //   //   dispatch(updateRoomData(standardroom.data[0]));
  //   //   dispatch(updateRoomData(deluxeroom.data[0]));
  //   //   dispatch(updateRoomData(viproom.data[0]));
  //   // }

  //   // setSdata(standardroom);
  //   // setDdata(deluxeroom);
  //   // setEdata(executiveroom)
  //   // setVdata(viproom);
  // };

  if (!data) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const handlePress = ({ roomname, roomdata }) => {
    // console.log(
    //   "***********************************this is the room name************************"
    // );
    // console.log(roomname, roomdata);

    console.log("^^^^^^^^^^^^^^^^^^^^^^");
    Navigate.navigate("details", {
      data: roomdata,
      name: roomname,
      price: roomdata.price,
    });
  };

  const filteredData = data.filter(room => room !== null);
  console.log("this is the filtered data ");
  console.log(filteredData);
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

  //  const getImage=(type)=>{
  //    if(type="standard"){
  //     return ' "../assets/images/hotel.jpg" '
  //    }
  //    else {
  //     return "../assets/images/hotel2.jpg"
  //    }
  //  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
      <View style={styles.main}>
        <ScrollView style={{ height: "100%" }}>
          {data
            .filter(room => {
              if (room !== null) {
                return room;
              }
            })
            .map(roomType => {
              return (
                <Pressable
                  key={roomType._id}
                  onPress={handlePress.bind(this, {
                    roomname: roomType.type,
                    roomdata: roomType,
                  })}
                >
                  <ImageBackground
                    style={styles.parent}
                    source={{ uri: image_base_url + images[roomType.type][1] }}
                    resizeMode="cover"
                  >
                    <View style={styles.container}>
                      {/* <Text style={styles.textContainer}>
                      {roomType.type.charAt(0).toUpperCase() +
                        roomType.type.slice(1)}
                    </Text> */}
                      <Chip
                        icon={{
                          name: "home",
                          type: "font-awesome",
                          size: 20,
                          color: "white",
                        }}
                        title={`${
                          roomType.type.charAt(0).toUpperCase() +
                          roomType.type.slice(1)
                        }`}
                        type="solid"
                        color="#00308F"
                        containerStyle={{}}
                      />
                      <Chip
                        icon={{
                          name: "money",
                          type: "font-awesome",
                          size: 20,
                          color: "white",
                        }}
                        title={`${roomType.price}`}
                        type="solid"
                        color="#00308F"
                        containerStyle={{}}
                      />
                    </View>
                  </ImageBackground>
                </Pressable>
              );
            })}
        </ScrollView>
      </View>
    </SafeAreaView>
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
    // backgroundColor: "#00308F",
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
