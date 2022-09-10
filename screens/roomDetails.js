import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";

import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { useState } from "react";

const ratingsArray = [1, 2, 3, 4, 5];

const RoomDetails = ({ route, navigation }) => {
  console.log("*************************");
  console.log(route.params.name);
  console.log(route.params.price);
  const description = route.params.data[0].details.desc;
  console.log(route.params.data[0]);

  //

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [duration, setDuration] = useState(null);

  function onDateChange(date, type) {
    if (type === "END_DATE") {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
    console.log("this is the ", type);
    console.log("this is the date", date);
  }

  function getDateDifference() {
    if (selectedEndDate !== null && selectedStartDate !== null) {
      let days = selectedEndDate.diff(selectedStartDate, "days");
      return days;
    }
    return undefined;
  }

  let days = getDateDifference();
  const startDate = selectedStartDate
    ? moment.utc(selectedStartDate).format("D MMMM, YYYY").toString()
    : "select date to check in on the calendar";
  const endDate = selectedEndDate
    ? moment.utc(selectedEndDate).format("D MMMM, YYYY").toString()
    : "select date to check out on the calendar";
  const minDate = new Date(); // Today
  const maxDate = moment().add(5, "months");

  //

  // console.log(description);
  console.log("*************************");
  if (!description) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="#00308F" />
      </View>
    );
  }

  function bookNow() {
    navigation.navigate("book", {});
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
    <View style={styles.main_container}>
        <View>
          <Image
            source={require("../assets/images/hotel.jpg")}
            style={{ width: "100%", height: 200 }}
          />
          <View style={styles.details}>
              <Text style={styles.heading}>{route.params.name}</Text>
              {<Text style={styles.heading}>{route.params.price}/Night</Text>}
           
          </View>
        </View>
      </View>

      {/* <ScrollView contentContainerStyle={styles.scrollview}> */}
        {/* <Text</Text> */}

        <View style={styles.container}>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={true}
            minDate={minDate}
            maxDate={maxDate}
            todayBackgroundColor="whitesmoke"
            todayTextStyle={{ color: "black" }}
            selectedDayColor="#00308F"
            selectedDayTextColor="#FFFFFF"
            onDateChange={onDateChange}
            restrictMonthNavigation={true}
            // scrollable={true}
            // horizontal={false}
            // showDayStragglers={true}
            nextTitle="Next Month"
            previousTitle="Previous Month"
            textStyle={{ color: "black", fontSize: 16 }}
          />

          <View style={styles.dates_container}>
            <Text style={styles.text}>
              Check In: <Text style={styles.text_placeholder}>{startDate}</Text>
            </Text>
            <Text style={styles.text}>
              Check Out: <Text style={styles.text_placeholder}>{endDate}</Text>
            </Text>
            {
              <Text
                style={[{ fontStyle: "italic", marginTop: 10 }, styles.text]}
              >
                Note: You must check out before 11am local time on {endDate}
              </Text>
            }
          </View>
        </View>
        <View style={styles.price_calc}>
          <View style={styles.price_calc_child}>
            <Text>Night(s) Booked: {days}</Text>
            <Text>Price/Night: 15000</Text>
          </View>
          <View style={styles.price_calc_child}>
            <Text>Number Of Adults: 1</Text>
            <Text>Total Cost: {Number(days) * 15000}</Text>
          </View>
        </View>

       
      <View style={styles.custom_buttons}>
          <Button
            mode="contained"
            color="#00308F"
            // onPress={bookNow}
            style={styles.custom_buttons_book}
          >
            Search for Room Availability
          </Button>
        </View>
    </ScrollView>
  );
};

export default RoomDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: "white",
  },
  main_container: {},
  details: {
    flex: 1,
    flexDirection:"row",
    padding: 10,
    backgroundColor: "#00308F",
    marginTop: -25,
    opacity:0.9,
    marginHorizontal: 10,
    // borderRadius: 4,
    alignItems: "center",
    justifyContent: "space-around",
  },

  ratings: {
    flexDirection: "row",
    // justifyContent:"center"
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#ffffff",
    // textAlign:"center"
  },
  custom_buttons: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    marginTop: 10,
    // justifyContent:"space-around"
  },
  custom_buttons_price: {
    marginEnd: 20,
    borderRadius: 4,
  },
  price: {
    color: "#fff",
    padding: 5,
  },
  // custom_buttons_book: {
  //   borderWidth: 1,
  //   borderColor: "blue",
  //   borderRadius: 4,
  // },
  book: {},

  scrollview: {
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    paddingBottom: 10,
  },
  main_container: {
    flex: 1,
  },

  container: {
    flex: 1,

    paddingTop: 10,
    backgroundColor: "whitesmoke",
    marginHorizontal: 5,

    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  dates_container: {
    padding: 10,
    flex: 1,
  },
  text: {
    marginBottom: 10,
  },
  text_placeholder: {
    fontStyle: "italic",

    color: "#00308F",
  },
  price_calc: {
    backgroundColor: "whitesmoke",
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  price_calc_child: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  custom_buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginTop: 10,
    alignItems: "flex-end",
  },
  custom_buttons_book: {
    flexBasis: "100%",
    justifyContent: "flex-end",
  },
});
