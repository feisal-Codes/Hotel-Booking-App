import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
// import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Number(Dimensions.get("window").height);

const Book = ({navigation, route}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [duration, setDuration] = useState(null);
 

const params= route.params
console.log(params)

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
    : "select date to check out on the calendar";
  const endDate = selectedEndDate
    ? moment.utc(selectedEndDate).format("D MMMM, YYYY").toString()
    : "select date to check out on the calendar";
  const minDate = new Date(); // Today
  const maxDate = moment().add(5, "months");



  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
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
            <Text style={[{ fontStyle: "italic", marginTop: 10 }, styles.text]}>
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

export default Book;

const styles = StyleSheet.create({
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
