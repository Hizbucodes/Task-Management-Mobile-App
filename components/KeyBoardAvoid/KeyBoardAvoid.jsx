import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const KeyBoardAvoid = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default KeyBoardAvoid;
