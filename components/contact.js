import { View, Text, StyleSheet } from "react-native";

const Contact = () => {
  // const {email, number}= route.params

  return (
    <View style={styles.main}>
      <View>
        <Text>Map</Text>
      </View>
      <View>
        <Text>hey</Text>
      </View>
      <View>
        <Text>hey</Text>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
