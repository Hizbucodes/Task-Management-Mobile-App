import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";
import "./global.css";
import Login from "./screens/Login/Login";
import { PaperProvider, Text } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Login />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
