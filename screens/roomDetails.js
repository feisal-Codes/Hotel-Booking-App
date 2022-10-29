import { useState } from "react";

import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { Button, Chip } from "@rneui/themed";
import { bookRooom } from "../util/http";
import { colors } from "../util/colors";
import { useSelector } from "react-redux";

const RoomDetails = ({ route, navigation }) => {
  console.log("*************************");
  // console.log(route.params.name);
  // console.log(route.params.price);
  console.log("here here ere here here here");
  console.log(route.params);
  const data = route.params;

  // const description = route.params.data[0].details.desc;
  // console.log(route.params.data[0]);

  const [visible, setVisible] = useState(false);

  //

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const state = useSelector(state => {
    return state.auth;
  });

  function handlePress() {
    // navigation.navigate("amenities", {
    //   screen:'amenity',
    //   params:{data:data}
    // });
    // navigation.navigate("amenities", {
    //   data:data
    // });
  }

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
  if (!data) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="#00308F" />
      </View>
    );
  }

  async function handleBooking(type) {
    try {
      if (!selectedStartDate) {
        Alert.alert("", "Select Check in Date");
        return;
      }
      if (!selectedEndDate) {
        Alert.alert("", "Select Check out Date");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${state.user ? state.user.token : ""}`,
        },
      };

      console.log("auth");
      console.log(state);

      const bookObj = {
        startDate: moment.utc(selectedStartDate).format("YYYY-MM-DD"),
        endDate: moment.utc(selectedEndDate).format("YYYY-MM-DD"),
        roomType: type,
      };

      console.log(bookObj, config);

      setIsLoading(true);

      const res = await bookRooom(bookObj, config);
      if (res) {
        setIsLoading(false);
      }
      if (res == 401 || res == 500) {
        // setIsLoading(false)
        throw res;
      }

      if (res == 400) {
        throw res;
      }

      console.log("this is the needed response");
      console.log(res);
      console.log("#####################################");

      navigation.navigate("book", {
        bookingData: res,
        days: days,
        bookingDates: bookObj,
        userId: state.user.id,
      });

      //navigate to a new screen
    } catch (err) {
      console.log("here too");
      const bookObjerr = {
        startDate: moment.utc(selectedStartDate).format("DD-MM-YYYY"),
        endDate: moment.utc(selectedEndDate).format("DD-MM-YYYY"),
        roomType: type,
      };

      // if (err.response.data) {
      //   console.log(err.response.data);
      // }
      if (err == 400) {
        Alert.alert(
          "",
          bookObjerr.roomType +
            " rooms are not available for the duration " +
            bookObjerr.startDate +
            " to " +
            bookObjerr.endDate
        );
      } else {
        Alert.alert("", "Oops! Something Happened, Try Again!");
      }

      console.log(err);
    }
  }

  return (
    <>
      <SafeAreaView>

        
        <ScrollView contentContainerStyle={styles.scrollview}>
          <Button
            title="Select dates"
            // onPress={handlePress}
            type="solid"
            color={colors.textColorGold}
            size="sm"
            raised={true}
            titleStyle={{ color: "black" }}
            containerStyle={{ marginBottom: 10 }}
          />
         
          <View style={styles.container}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              maxDate={maxDate}
              todayBackgroundColor="gold"
              todayTextStyle={{ color: "black" }}
              selectedDayColor={colors.primary400}
              selectedDayTextColor="#FFFFFF"
              onDateChange={onDateChange}
              restrictMonthNavigation={true}
              // scrollable={true}
              // horizontal={false}
              // showDayStragglers={true}
              nextTitle="Next Month"
              previousTitle="Previous Month"
              textStyle={{ color: "black", fontSize: 14 }}
            />
          </View>

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
                Note: You must check out before 11am EAT on {endDate}
              </Text>
            }
          </View>
          {/* <View style={styles.price_calc}>
          <View style={styles.price_calc_sndchild}>
            <Text>Night(s) Booked: {days}</Text>
            <Text>Price/Night: {data.price}</Text>
            <Text>Total Cost: {days ? Number(days) * data.price : ""}</Text>
          </View>
          <View style={styles.price_calc_sndchild}>
            <Text>Number Of Adults: {data.occupancy.adult}</Text>
            <Text>Number Of Children: {data.occupancy.children}</Text>
            <Text>Number Of Guests: {data.occupancy.guest}</Text>
          </View>
        </View> */}

          <View style={styles.custom_buttons}>
            <Button
              title="Search Room Availability"
              type="solid"
              color={colors.primary400}
              size="md"
              onPress={() => handleBooking(data.type)}
              loading={isLoading}
              buttonStyle={{ marginBottom: 5 }}
            />
          </View>
        </ScrollView>
        {isLoading && (
          <View>
            
          <ActivityIndicator size="large" color="#00308F" />
          </View>
      )}
        {/* <CustomModal
        visible={visible}
        setVisible={setVisible}
        RoomAmenities={RoomAmenities}
        data={data}
      /> */}
      </SafeAreaView>
    </>
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
    flexDirection: "row",
    padding: 5,
    // backgroundColor: "#FCFCFC",
    marginTop: 15,
    // opacity: 0,
    marginHorizontal: 5,
    // borderRadius: 4,
    alignItems: "center",
    justifyContent: "space-around",
  },

  ratings: {
    flexDirection: "row",
    // justifyContent:"center"
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    // marginBottom: 5,
    color: "#ffffff",
    // textAlign:"center"
  },
  custom_buttons: {
    flex: 1,
    // flexDirection: "row",
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
    backgroundColor: "red",
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

    // justifyContent: "space-between",
    flexDirection: "column",
    // paddingBottom: 10,
    // backgroundColor:"white"
  },
  main_container: {
    flex: 1,
    // backgroundColor:"white"
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
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  price_calc_child: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  price_calc_sndchild: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginVertical: 10,
    paddingHorizontal: 10,
    // justifyContent: "space-between",
  },
  custom_buttons: {
    marginHorizontal: 5,
    marginTop: 10,
    justifyContent: "flex-end",

    borderRadius: 10,
  },
  custom_buttons_book: {
    flexBasis: "100%",
    marginTop: 10,
    justifyContent: "flex-end",
  },
});
