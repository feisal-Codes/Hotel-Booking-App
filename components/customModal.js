import { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Button, Dialog, Icon } from "@rneui/themed";
const CustomModal = ({ visible, setVisible, RoomAmenities, data }) => {
  const hideDialog = () => setVisible(false);

  return (
    <Dialog
      overlayStyle={styles.overlay}
      isVisible={visible}
      onBackdropPress={hideDialog}
    >
      <View style={styles.dialog_header}>
        <Dialog.Title title="Room Details" />
        <View>
          <Button
            title="Close"
            type="clear"
            color="#00308F"
            onPress={() => {
              setVisible(false);
            }}
          >
            <Icon name="close" color="blue" />
          </Button>
        </View>
      </View>
      <ScrollView>
        <View style={styles.dialog_body}>
          <RoomAmenities data={data} />
         
          
         
         
        </View>
      </ScrollView>
    </Dialog>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "whitesmoke",
    paddingTop: 20,
    width:"90%",
    maxHeight:"95%",
    minHeight:"80%"
  },
  dialog_header: {
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
  },
  dialog_body: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
