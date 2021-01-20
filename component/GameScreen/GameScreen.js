import React from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GameOver from "../GameOver/GameOver";
import MyCard from "../MyCard/MyCard";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const RandomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

function GameScreen(props) {
  const [randomeNumber, setrandomeNumber] = React.useState(
    RandomNumber(100, 1)
  );

  const [gamefinished, setgamefinished] = React.useState(false);
  const [roundCounter, setroundCounter] = React.useState(0);
  const [guessTrack, setguessTrack] = React.useState([]);

  React.useEffect(() => {
    if (props.userChoiceNumber == randomeNumber) {
      setgamefinished(true);
    }
  });
  //   const [TrackHighNumber, setTrackHighNumber] = React.useState(100);
  //   const [TrackLowNumber, setTrackLowNumber] = React.useState(1);

  let TrackHighNumber = React.useRef(100);
  let TrackLowNumber = React.useRef(1);

  const actionHandler = (type) => {
    // console.log(props.userChoiceNumber);
    // if (
    //   (type == "lower" && randomeNumber < props.userChoiceNumber) ||
    //   (type == "greater" && randomeNumber > props.userChoiceNumber)
    // ) {
    //   Alert.alert("Hmmm", "You know that this is wrong...", [
    //     {
    //       text: "Sorry!",
    //       style: "cancel",
    //     },
    //   ]);

    //   return;
    // }

    setroundCounter(roundCounter + 1);
    setguessTrack([...guessTrack, randomeNumber]);
    if (type == "lower") {
      TrackHighNumber.current = randomeNumber;
    }
    if (type == "greater") {
      TrackLowNumber.current = randomeNumber;
    }

    const newNumber = RandomNumber(
      TrackHighNumber.current,
      TrackLowNumber.current
    );
    setrandomeNumber(newNumber);

    // if (type == "lower") {
    //   setrandomeNumber(RandomNumber(randomeNumber, 1));
    // }
    // if (type == "greater") {
    //   setrandomeNumber(RandomNumber(100, randomeNumber));
    // }
  };

  return gamefinished ? (
    <GameOver roundCounter={roundCounter} userChoice={props.userChoiceNumber} />
  ) : (
    <View style={styles.game_screen}>
      <Text style={{ fontSize: 30 }}>Opponent's Guess</Text>
      <Text style={styles.g_number}>{randomeNumber}</Text>
      <MyCard>
        <View style={styles.button}>
          <AntDesign
            onPress={() => actionHandler("lower")}
            name="minus"
            style={{ backgroundColor: "tomato", padding: 10, borderRadius: 10 }}
            size={24}
            color="white"
          ></AntDesign>
          {/* <Button onPress={() => actionHandler("lower")} title="lower"></Button> */}
          {/* <Button onPress={() => actionHandler("greater")} title = "D">
            
          </Button> */}
          <AntDesign
            onPress={() => actionHandler("greater")}
            name="plus"
            style={{ backgroundColor: "tomato", padding: 10, borderRadius: 10 }}
            size={24}
            color="white"
          ></AntDesign>
        </View>
      </MyCard>

      <ScrollView style={{ marginTop: 30 }}>
        {guessTrack.map((value, index) => {
          return (
            <View
              key={index}
              style={styles.guess}
              onStartShouldSetResponder={() => true}
            >
              <Text style={{ color: "white", fontSize: 20, padding: 10 }}>
                {value}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );

  //   return (
  //     <GameOver roundCounter={1} userChoice={1} />
  //   );
}

const styles = StyleSheet.create({
  game_screen: {
    alignItems: "center",
  },

  g_number: {
    borderWidth: 1,
    padding: 20,
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: "tomato",
    color: "white",
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    padding: 5,
    width: 300,
    justifyContent: "space-between",
  },
  guess: {
    backgroundColor: "tomato",
    width: 250,
    alignItems: "center",
    marginVertical: 2,
  },
});
export default GameScreen;
