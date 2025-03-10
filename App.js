import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import KeyBoardAvoid from "./components/KeyBoardAvoid/KeyBoardAvoid";
import "./global.css";
import StackNavigator from "./navigation/StackNavigator/StackNavigator";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
