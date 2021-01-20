import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function GameOver(props) {
  return (
    <View style={styles.gameover}>
      <Text style={{ fontSize: 30 }}>Game Over</Text>
      <Text style={{ fontSize: 20 }}>Guessed Number : {props.userChoice} </Text>
      <Text style={{ fontSize: 20 }}>#Rounds : {props.roundCounter} </Text>
      <Button title="Start Again"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  gameover: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default GameOver;
