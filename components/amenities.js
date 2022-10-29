import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Divider } from "@rneui/base";
// import { Tab, TabView } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RoomDetails from "../screens/roomDetails";

const Tab = createMaterialTopTabNavigator();

const Amenities = ({ route }) => {
  const data = route.params;
  console.log("from modal");
  console.log(data);
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.header}>{data.type.toUpperCase()} ROOM</Text>
        <Text style={styles.header}>{data.price}/Night</Text>
        {/* <Divider
          orientation="horizontal"
          subHeader="Amenities"
          subHeaderStyle={styles.header}
        /> */}

        <View style={styles.textMargin}>
          {data.details.desc.map((des, index) => {
            return <Text key={index}>{des}</Text>;
          })}
        </View>
        <Divider orientation="horizontal" />
        <View style={{ paddingVertical: 20 }}>
          <Text>Number of Beds: {data.bed.number}</Text>
          <Text style={styles.textMargin}>Bed Type: {data.bed.type}</Text>
        </View>
        <Divider orientation="horizontal" />
        <View style={{ paddingVertical: 20 }}>
          <Text>Number of Bedroom: {data.bed.bedroom}</Text>
          <Text>Number of LivingRoom: {data.details.livingroom}</Text>
          <Text style={styles.textMargin}>
            Number of Bathroom: {data.details.bathroom}
          </Text>
        </View>
        <Divider orientation="horizontal" />
        <View style={{ paddingVertical: 20 }}>
          <Text style={{marginBottom:5, fontWeight:"bold"}}>Room Occupancy</Text>
          <Text>Adults: {data.occupancy.adult}</Text>
          <Text>Children: {data.occupancy.children}</Text>
          <Text style={styles.textMargin}>Guest: {data.occupancy.guest}</Text>
        </View>
      </View>
    </>
  );
};

const RoomImages = ({ route }) => {
  console.log("images");
  console.log(route.params);
  return (
    <>
      <Text>Images</Text>
    </>
  );
};

const RoomRules = ({ route }) => {
  return (
    <>
      <Text>Rules</Text>
    </>
  );
};

// export default RoomAmenities;

export function MyTabs({ route }) {
  console.log("inside the taps");
  // console.log(data)
  console.log(route.params);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        // tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: "gold", height: 50 },
      }}
    >
      <Tab.Screen
        name="details"
        component={RoomDetails}
        initialParams={route.params.data}
        options={{
          title: "Book",
        }}
      />
      <Tab.Screen
        name="amenity"
        component={Amenities}
        initialParams={route.params.data}
        options={{
          title: "features",
        }}
      />

      <Tab.Screen
        name="images"
        component={RoomImages}
        initialParams={route.params.data}
        options={
          {
            // tabBarIcon: ({ focused, size, color }) => (
            //   <Ionicons name="list" size={5} color="white" />
            // ),
          }
        }
      />
      <Tab.Screen
        name="rules"
        component={RoomRules}
        options={
          {
            // tabBarIcon: ({ focused, size, color }) => (
            //   <Ionicons name="list" size={5} color="white" />
            // ),
          }
        }
      />
    </Tab.Navigator>
  );
}

const RoomAmenities = ({ navigation, route }) => {
  const [index, setIndex] = React.useState(0);

  console.log(route.params);
  const data = route.params.data;
  return (
    <>
      <MyTabs data={data} />
    </>
  );
};

export default RoomAmenities;

const styles = StyleSheet.create({
  view: {
    backgroundColor: "whitesmoke",
    flex: 1,
    padding: 10,
    // height:"10%",
    // marginLeft:20,
    // marginVertical:20
  },
  //   scrollview: {
  //     flexGrow: 1,
  //     backgroundColor:"red",
  //     // flexDirection: "column",
  //     // paddingBottom: 10,
  //     height: "90%",
  //   },

  header: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    // fontWeight:"bold"
  },
  textMargin: {
    marginBottom: 10,
  },
});
