import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import GameScreen from "./component/GameScreen/GameScreen";
import Header from "./component/Header/Header";
import StartGame from "./component/StartGame/StartGame";
import AppLoading from "expo-app-loading";

import { useFonts, Ubuntu_500Medium } from "@expo-google-fonts/ubuntu";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
  });

  const [startGame, setStartGame] = React.useState(false);
  const [userChoiceNumber, setuserChoiceNumber] = React.useState("");
  const onStartGame = (e, value) => {
    setStartGame(e);
    setuserChoiceNumber(value);
  };

  const DatatoOutput = startGame ? (
    <GameScreen userChoiceNumber={userChoiceNumber} />
  ) : (
    <StartGame onStartGame={onStartGame} />
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header title="Guess a number" />
        {DatatoOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth : 1
    flex: 1,
  },
});
