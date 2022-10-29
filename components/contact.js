import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Contact = () => {
  // const {email, number}= route.params

  const user = useSelector(state => {
    return state.auth.user;
  });
  const { email, lastname, firstname, phoneNumber } = user;
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^");
  console.log(user);
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^");

  return (
    <View style={styles.main}>
      <View>
        <Text>
          {firstname.toUpperCase()} {lastname.toUpperCase()}
        </Text>
      </View>
      <View>
        <Text>{email}</Text>
      </View>
      <View>
        <Text>{phoneNumber}</Text>
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
