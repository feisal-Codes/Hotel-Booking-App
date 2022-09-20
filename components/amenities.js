import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Divider } from "@rneui/base";

const RoomAmenities = ({ data }) => {
  console.log("from modal");
  console.log(data);
  return (
    <>
    <View style={styles.view}>
      <Text style={styles.header}>{data.type.toUpperCase()} ROOM</Text>
      <Text style={styles.header}>{data.price}/Night</Text>
      <Divider
        orientation="horizontal"
        subHeader="Amenities"
        subHeaderStyle={styles.header }
      />
      
      <View style={styles.textMargin}>
        {data.details.desc.map((des, index) => {
          return <Text key={index}>{des}</Text>;
        })}
      </View>
      <Divider
        orientation="horizontal"
        subHeader="Bed"
        subHeaderStyle={styles.header}
      />
      <Text>Number of Beds: {data.bed.number}</Text>
      <Text style={styles.textMargin}>Bed Type: {data.bed.type}</Text>
      <Divider
        orientation="horizontal"
        subHeader="Rooms"
        subHeaderStyle={styles.header}
      />
      <Text>Number of Bedroom: {data.bed.bedroom}</Text>
      <Text>Number of LivingRoom: {data.details.livingroom}</Text>
      <Text style={styles.textMargin}>Number of Bathroom: {data.details.bathroom}</Text>
      <Divider
        orientation="horizontal"
        subHeader="Occupancy"
        subHeaderStyle={styles.header}
      />
      <Text>Adults: {data.occupancy.adult}</Text>
      <Text>Children: {data.occupancy.children}</Text>
      <Text style={styles.textMargin}>Guest: {data.occupancy.guest}</Text>
    </View>
    <View>
      <Text style={styles.header}>Room Rules</Text>
      <Text>Lorem ipsum thi si awesomehvewhbguidgvjhcgjcgvacvjhvcaj</Text>
      <Text>Lorem ipsum thi si awesomehvewhbguidgvjhcgjcgvacvjhvcaj</Text>
      <Text>Lorem ipsum thi si awesomehvewhbguidgvjhcgjcgvacvjhvcaj</Text>
      <Text>Lorem ipsum thi si awesomehvewhbguidgvjhcgjcgvacvjhvcaj</Text>
      <Text>Lorem ipsum thi si awesomehvewhbguidgvjhcgjcgvacvjhvcaj</Text>
      <Text>Lorem ipsum thi si awesomehvewhbguidgvjhcgjcgvacvjhvcaj</Text>

    </View>
    </>
  );
};

export default RoomAmenities;

const styles = StyleSheet.create({
  //   view: {
  //     backgroundColor: "whitesmoke",
  //     flex: 1,
  //     // height:"10%",
  //     // marginLeft:20,
  //     // marginVertical:20
  //   },
  //   scrollview: {
  //     flexGrow: 1,
  //     backgroundColor:"red",
  //     // flexDirection: "column",
  //     // paddingBottom: 10,
  //     height: "90%",
  //   },

header:{
  marginTop:10,
  marginBottom:10,
  fontSize:18,
  // fontWeight:"bold"
},
textMargin:{
  marginBottom:10
}


});
