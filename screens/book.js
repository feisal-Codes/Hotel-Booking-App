import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import React, { useState } from "react";
import { Button, Chip } from "@rneui/themed";
import { colors } from "../util/colors";
import { ScrollView } from "react-native-gesture-handler";
import { AddBook } from "../util/http";
import { useSelector } from "react-redux";

const Book = ({ navigation, route }) => {
  console.log(route.params);
  const data = route.params.bookingData;
  const days = route.params.days;
  const dates = route.params.bookingDates;
  const userId = route.params.userId;
  const state = useSelector(state => {
    return state.auth;
  });

  const [isLoading, setisLoading] = useState(false);

  console.log(dates);

  if (!data) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const handleBooking = async () => {
    // roomType,
    // startDate,
    // endDate,
    // userId,
    // roomId,
    // roomNumber,
    // totalAmount,
    // totalNights,
    // status,
    try {
      const { startDate, endDate } = dates;
      const { _id, number, type } = data;
      const totalAmount = Number(data.price * Number(days));
      const config = {
        headers: {
          Authorization: `Bearer ${state.user ? state.user.token : ""}`,
        },
      };
      const book = {
        roomType: type,
        startDate,
        endDate,
        userId,
        roomm:data,
        RoomId: _id,
        roomNumber: number,
        totalAmount,
        totalNights: days,
        status: "Not paid ",
      }; 

      const res = await AddBook(book, config);
      console.log(res)
      
      if (res == 401 || res == 500 || res == 404) {
        throw res;
      }

      if (typeof res == "undefined") {
        throw res;
      }
      
      if (res.status == 200) {
        Alert.alert("success", "Room was reserved,please pay on arrival");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <View>
        <Button
          title="Booking Details"
          // onPress={handlePress}
          type="solid"
          color={colors.textColorGold}
          size="sm"
          raised={true}
          titleStyle={{ color: "black" }}
          containerStyle={{ marginBottom: 10 }}
        />

        <View style={styles.price_calc_sndchild}>
          <Text style={styles.textFont}>
            {`${
              dates.roomType.charAt(0).toUpperCase() + dates.roomType.slice(1)
            } `}
            Room
          </Text>
          <Text style={styles.textFont}>Room Number: {data.number}</Text>

          <Text style={styles.textFont}>Check in : {dates.startDate}</Text>
          <Text style={styles.textFont}>Check out : {dates.endDate}</Text>
        </View>

        <View style={styles.price_calc_sndchild}>
          <Text style={styles.textFont}>Night(s) Booked: {days}</Text>
          <Text style={styles.textFont}>Price/Night: {data.price}</Text>
          <Text style={styles.textFont}>
            Total Cost: {days ? Number(days) * data.price : ""}
          </Text>
        </View>
        <View style={styles.price_calc_sndchild}>
          <Text style={styles.textFont}>
            Number Of Adults: {data.occupancy.adult}
          </Text>
          <Text style={styles.textFont}>
            Number Of Children: {data.occupancy.children}
          </Text>
          <Text style={styles.textFont}>
            Number Of Guests: {data.occupancy.guest}
          </Text>
        </View>

        <View>
          <Text style={[{ fontStyle: "italic", marginTop: 10 }, styles.text]}>
            Note: You must check out before 11am EAT on {dates.endDate}
          </Text>
        </View>
        <View style={styles.custom_buttons}>
          <Button
            title="Pay Now"
            type="solid"
            color={colors.primary400}
            size="md"
            // onPress={() => handleBooking(data.type)}
            // loading={isLoading}
            buttonStyle={{ margin: 10, marginBottom: 0 }}
          />
          <Button
            title="Pay On Arrival"
            type="solid"
            color={colors.primary400}
            size="md"
            onPress={handleBooking}
            // loading={isLoading}
            buttonStyle={{ margin: 10 }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Book;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
  },
  text_placeholder: {
    fontStyle: "italic",

    color: "#00308F",
  },
  textFont: {
    fontSize: 15,
    marginBottom: 1,
  },
  price_calc_sndchild: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginVertical: 10,
    // paddingHorizontal: 10,
    backgroundColor: "white",
    padding: 20,
    // justifyContent: "space-between",
  },
});
