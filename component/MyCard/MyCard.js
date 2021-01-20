import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

function MyCard(props) {
  return (
    <View style={styles.gamescreen}>
      {/* <Text>The Game Screen</Text> */}
      <View style={{ ...styles.main, ...props.style }}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  gamescreen: {
    alignItems: "center",
    // borderWidth: 5,
  },

  main: {
    width: "70%",
    elevation: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
});

export default MyCard;
