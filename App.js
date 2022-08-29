import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { useState } from "react";

import Contact from "./components/contact";
import Home from "./components/home";
import RoomType from "./screens/roomTypes";
import colors from "./util/colors";
import Book from "./components/book";
import Settings from "./components/settings";
import { Provider as PaperProvider } from "react-native-paper";
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
} from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="types"
        component={RoomType}
        options={{
          title: "Type Of Rooms",
          headerShown: false,
        }}
      />
      <Stack.Screen name="details" component={RoomDetails}
      options={
        {
          headerTitleAlign:"center",
          headerStyle:{
            backgroundColor:"#e6e9ed"
          }
        }
      }
      
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#e6e9ed",
            },
            sceneContainerStyle: {
              backgroundColor: "#e6e9ed",
            },
            drawerContentStyle: {
              backgroundColor: "#ffffff",
              paddingTop: 15,
              width: "100%",
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              contentStyle: {
                backgroundColor: "red",
              },
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name="md-home"
                  size={size}
                  color={focused ? "blue" : "#ccc"}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Roomtypes"
            component={MyStackScreens}
            options={({ route }) => ({
              title: "Type Of Rooms",
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons name="bed-outline" size={size} color={color} />
              ),
              headerShown:
                getFocusedRouteNameFromRoute(route) == "details" ? false : true,
            })}
          />

          <Drawer.Screen
            name="Bookings"
            component={Book}
            options={{
              backgroundColor: "#e6e9ed",
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons name="receipt-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Location"
            component={Contact}
            options={{
              backgroundColor: "#e6e9ed",
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons name="location-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={Contact}
            options={{
              backgroundColor: "#e6e9ed",
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name="md-settings-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={Contact}
            options={{
              backgroundColor: "#e6e9ed",
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name="md-person-circle-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#e6e9ed",
  },
});
