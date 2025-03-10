import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const CustomButton = ({ title, color, style, onPress, ...props }) => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        style={style}
        buttonColor={color}
        onPress={onPress}
        {...props}
      >
        {title}
      </Button>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
