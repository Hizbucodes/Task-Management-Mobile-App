import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text variant="displayMedium">Hello World</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
