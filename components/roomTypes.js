import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";

const RoomType = () => {
  return (
    <View style={styles.main}>
      
        <ImageBackground
          style={styles.parent}
          source={require("../assets/images/hotel.jpg")}
          resizeMode="cover"
        >
          <Text style={styles.text}>Standard</Text>
        </ImageBackground>
      
        <ImageBackground
          style={styles.parent}
          source={require("../assets/images/hotel.jpg")}
          resizeMode="cover"
        >
          <Text style={styles.text}>Deluxe</Text>
        </ImageBackground>
        <ImageBackground
          style={styles.parent}
          source={require("../assets/images/hotel.jpg")}
          resizeMode="cover"
        >
          <Text style={styles.text}>Executive</Text>
        </ImageBackground>
        <ImageBackground
          style={styles.parent}
          source={require("../assets/images/hotel.jpg")}
          resizeMode="cover"
        >
          <Text style={styles.text}>VIP</Text>
        </ImageBackground>
    </View>
  );
};

export default RoomType;

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    height:"100%"
  },
  container:{
  flex:1

  },

  parent: {
    flex: 1,
    opacity:0.8,
    justifyContent:"flex-end"
    

   
  },
  text:{
    fontSize:22,
    backgroundColor:"#ffffff",
    padding:10
  }
});
