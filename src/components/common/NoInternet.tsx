import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const NoInternet = ({ visible }) => {
  return (
    <Modal isVisible={visible} style={styles.modal} animationInTiming={600}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Connection Error</Text>
        <Text style={styles.modalText}>
          Oops! Looks like your device is not connected to the Internet.
        </Text>
        {/* <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("trying")}
      >
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity> */}
      </View>
    </Modal>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  // ...
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  modalText: {
    fontSize: 18,
    color: '#555',
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
