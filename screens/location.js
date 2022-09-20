import React, { useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

function CustomMarker() {
  return (
    <View style={styles.marker}>
      <Text style={styles.text}>Sakina Hotel</Text>
    </View>
  );
}


function Location() {
  const [mapRegion, setmapRegion] = useState({
    latitude: -1.2742127042168134,
    longitude: 36.849864860987836,
    latitudeDelta: 0.006,
    longitudeDelta: 0.001,
  });
  return (
    <View>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion}
          >
            <CustomMarker />
          </Marker>
      </MapView>
    </View>
  );
}

export default Location;


const styles = StyleSheet.create({
  marker: {
    padding: 10,
    backgroundColor: "#00308F",
    borderColor: "#eee",
    borderRadius: 5,
  },
  text: {
    color:"#ffffff",
    padding:4
  },
});