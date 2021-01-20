import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "tomato",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },

  header_text: {
    color: "white",
    fontSize: 20,
    marginTop: 25,
  },
});
export default Header;
