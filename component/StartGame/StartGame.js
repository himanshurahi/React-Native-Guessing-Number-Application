import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Alert,
  Image,
} from "react-native";
import MyCard from "../MyCard/MyCard";

function StartGame(props) {
  const [enteredNumber, setenteredNumber] = React.useState("");

  const [confirmed, setConfirmed] = React.useState(false);

  const [selectedNumber, setselectedNumber] = React.useState("");

  const resetHandler = () => {
    setenteredNumber("");
    setselectedNumber("");
    setConfirmed(false);
  };

  const confirmHandler = () => {
    if (enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be between 1 and 99",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: true }
      );
      return setConfirmed(false);
    }
    setselectedNumber(enteredNumber);
    setConfirmed(true);
  };
  return (
    <View>
      <MyCard>
        <Text style={styles.main_text}>Select a number</Text>
        <TextInput
          style={styles.main_input}
          placeholder="Enter a number"
          blurOnSubmit
          keyboardType="numeric"
          maxLength={2}
          onChangeText={(e) => setenteredNumber(e.replace(/[^0-9]/g, ""))}
          value={enteredNumber}
        ></TextInput>
        <View style={styles.button_container}>
          <Button title="Reset" color="red" onPress={resetHandler}></Button>
          <Button title="Confirm" onPress={confirmHandler}></Button>
        </View>
        {/* <Image source={r} style={{ width: 305, height: 159 }} /> */}
        {/* {confirmed && <Text>This is a : {selectedNumber}</Text>} */}
      </MyCard>
      {confirmed && (
        <MyCard style={{ width: "50%" }}>
          <View style={styles.selectedNumber}>
            <Text style={{ color: "black" }}>Selected Number</Text>
            <Text
              style={{
                borderWidth: 2,
                padding: 20,
                textAlign: "center",
                borderRadius: 5,
                fontSize: 25,
                backgroundColor: "tomato",
                color: "white",
                margin: 15,
              }}
            >
              {selectedNumber}
            </Text>
            <Button
              title="Start Game"
              onPress={() => props.onStartGame(true, selectedNumber)}
            ></Button>
          </View>
        </MyCard>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main_text: {
    fontSize: 25,
    fontFamily: "Ubuntu_500Medium",

    textAlign: "center",
  },

  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  main_input: {
    textAlign: "center",
    marginVertical: 30,
    fontFamily: "Ubuntu_500Medium",
  },

  selectedNumber: {
    alignItems: "center",
  },
});

export default StartGame;
