import React from "react";
import { Text, View } from "react-native";

const RowText = ({
  messageOne,
  messageTwo,
  conatinerStyle,
  messageOneStyle,
  messageTwoStyle,
}) => {
  return (
    <View style={conatinerStyle}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
