import { View, Text, ActivityIndicator} from "react-native";

const RoomDetails = ({ route }) => {
    console.log("*************************")
    const description = route.params.data[0].details.desc
    console.log(description)
  console.log("*************************")
  if(!description){
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
  }


  return (
    <View>
      <Text>roomDetail</Text>
    </View>
  );
};

export default RoomDetails;
