// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useSelector, Provider, useDispatch } from "react-redux";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import React, { useEffect, useLayoutEffect, useState } from "react";

import Contact from "./components/contact";
import Home from "./components/home";
import RoomType from "./screens/roomTypes";
import { colors } from "./util/colors";
import Book from "./screens/book";
import Settings from "./components/settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RoomAmenities, { MyTabs } from "./components/amenities";

import { store } from "./store/store";

import RoomDetails from "./screens/roomDetails";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Login from "./screens/login";
import Register from "./screens/register";
import Location from "./screens/location";
import { getRoomsData } from "./store/reducers/roomsDataSlice";
import { getHotelsData } from "./store/reducers/hotelDataSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import Bookings from "./screens/bookings";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function DetailsStack(){
  return (
    <Stack.Navigator>



      <Stack.Screen
        name="Location"
        component={Location}
        options={{
          title: "location",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.primary400,
          },
          headerTintColor: colors.textColor,
          contentStyle: {
            backgroundColor: "#e6e9ed",
          },

          // headerShown:false
          // contentStyle: {
          //   backgroundColor: "#e6e9ed",
          // },
        }}
      />
      </Stack.Navigator>
  )
}



function MyStackScreens() {
  return (
    <Stack.Navigator>



    
    

      <Stack.Screen
        name="types"
        component={RoomType}
        options={{
          headerTitleAlign: "center",
          title: "Rooms",
          // headerShown: false,
          contentStyle: {
            // backgroundColor: "#00308F",
            // backgroundColor: "#e6e9ed",
          },
          headerStyle: {
            backgroundColor: colors.primary400,
          },
          headerTintColor: colors.textColor,
        }}
      />
      {/* <Stack.Screen
        name="details"
        component={RoomDetails}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.primary400,
          },
          headerTintColor: colors.textColor,
          contentStyle: {
            // backgroundColor: "#e6e9ed",
          },

          // headerTintColor: "white",
          // headerShown:false
        }}
      /> */}

    
      <Stack.Screen
        name="book"
        component={Book}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.primary400,
          },
          headerTintColor: colors.textColor,
          contentStyle: {
            // backgroundColor: "#e6e9ed",
          },
          // headerTintColor: {
          //   color: "white",
          // },
          // contentStyle: {
          //   backgroundColor: "#e6e9ed",
          // },
        }}
      />
       
      <Stack.Screen
        name="amenities"
        component={MyTabs}
        options={{
          title: "Room Features",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.primary400,
          },
          headerTintColor: colors.textColor,
          // contentStyle: {
          //   backgroundColor: "red",
          // },

          // headerShown:false
          // contentStyle: {
          //   backgroundColor: "#e6e9ed",
          // },
        }}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "#f5f6f7",
        tabBarStyle: {
          backgroundColor: colors.primary400,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="md-home" size={20} color={color} />
          ),
        }}
      />
      
     
      <Tab.Screen
        name="Roomtypes"
        component={MyStackScreens}
        options={({ route }) => ({
          title: "Rooms",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="bed-outline" size={20} color={color} />
          ),
          headerShown:
            getFocusedRouteNameFromRoute(route) == "details" ||
            getFocusedRouteNameFromRoute(route) == "book"
              ? false
              : false,
        })}
      />

      
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          backgroundColor: "#e6e9ed",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="ios-list" size={20} color={color} />
          ),
          headerShown: false,
          
        }}
      />

<Tab.Screen
      
      name="Location"
      component={Location}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => (
          <Ionicons name="location" size={20} color={color} />
        ),
      }}
      
      />
      <Tab.Screen
        name="Profile"
        component={Contact}
        options={{
          backgroundColor: "#e6e9ed",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="md-person-circle-outline" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    // <Drawer.Navigator
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: "#e6e9ed",
    //     },
    //     sceneContainerStyle: {
    //       backgroundColor: "#e6e9ed",
    //     },
    //     drawerContentStyle: {
    //       backgroundColor: "#ffffff",
    //       paddingTop: 15,
    //     },
    //   }}
    // >
    //   <Drawer.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       contentStyle: {
    //         // backgroundColor: "red",
    //       },
    //       drawerIcon: ({ focused, size }) => (
    //         <Ionicons
    //           name="md-home"
    //           size={size}
    //           color={focused ? "blue" : "#ccc"}
    //         />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Roomtypes"
    //     component={MyStackScreens}
    //     options={({ route }) => ({
    //       title: "Type Of Rooms",
    //       drawerIcon: ({ focused, size, color }) => (
    //         <Ionicons name="bed-outline" size={size} color={color} />
    //       ),
    //       headerShown:
    //         getFocusedRouteNameFromRoute(route) == "details" ||
    //         getFocusedRouteNameFromRoute(route) == "book"
    //           ? false
    //           : true,
    //     })}
    //   />
    //   <Drawer.Screen
    //     name="Bookings"
    //     component={Book}
    //     options={{
    //       backgroundColor: "#e6e9ed",
    //       drawerIcon: ({ focused, size, color }) => (
    //         <Ionicons name="receipt-outline" size={size} color={color} />
    //       ),
    //       headerShown: false,
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Location"
    //     component={Location}
    //     options={{
    //       backgroundColor: "#e6e9ed",
    //       drawerIcon: ({ focused, size, color }) => (
    //         <Ionicons name="location-outline" size={size} color={color} />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Settings"
    //     component={Contact}
    //     options={{
    //       backgroundColor: "#e6e9ed",
    //       drawerIcon: ({ focused, size, color }) => (
    //         <Ionicons name="md-settings-outline" size={size} color={color} />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Profile"
    //     component={Contact}
    //     options={{
    //       backgroundColor: "#e6e9ed",
    //       drawerIcon: ({ focused, size, color }) => (
    //         <Ionicons
    //           name="md-person-circle-outline"
    //           size={size}
    //           color={color}
    //         />
    //       ),
    //     }}
    //   />
    // </Drawer.Navigator>
  );
}

function AuthScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: "login",
          headerShown: false,
          contentStyle: {
            backgroundColor: "whitesmoke",
          },
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          title: "register",
          headerShown: false,
          contentStyle: {
            backgroundColor: "whitesmoke",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function AppEntry() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const hdata = useSelector(state => state.hotel.data);
  const hloading = useSelector(state => state.hotel.loading);
  const hisSuccess = useSelector(state => state.hotel.isSuccess);
  const message = useSelector(state => state.hotel.message);
  const { data, loading, isSuccess } = useSelector(state => state.rooms); 
  // console.log("this is the needed state");
  // console.log(loading);
  // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

  // console.log(isAuth);
  // console.log("&&&&&&&&&&&&&&&");
  console.log("rdata");
  console.log(data);
  useEffect(() => {
    dispatch(getRoomsData());
    dispatch(getHotelsData());
  }, []);

  // const mydata = useSelector(state => state.rooms.data);
  // console.log(mydata);

  console.log(
    "***********************This is the data we need **********************"
  );
  // console.log(data);
  console.log("loading : " + loading);
  console.log("success " + isSuccess);
  if (hloading || loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  // console.log("data ", data);
  // console.log("message" + message);
  // console.log(
  //   "***********************This is the data we need **********************"
  // );

  if (
    (loading == false && isSuccess == false) ||
    (hloading == false && hisSuccess == false)
  ) {
    return (
      <View style={{marginTop:50}}>
        <Text>
          oops something went wrong, check your network connection and try
          again.......
        </Text>
      </View>
    );
  }
console.log(hdata)
console.log(data)
  if (!hdata || !data) {
    return (
      <View style={{marginTop:50}}>
        <Text>oops something went wrong, try again.......</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.primary400}
        style="light"
        barStyle="light-content"
      />

      {!isAuth && <AuthScreen />}
      {isAuth && <MainScreen />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
       <StatusBar
        backgroundColor={colors.primary400}
        style="light"
        barStyle="light-content"
      />

      <Provider store={store}>
        <AppEntry />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: "#e6e9ed",
  },
});
