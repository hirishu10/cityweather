import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = ({
  iconName,
  iconSize,
  iconColor,
  iconText,
  iconTextStyle,
}) => {
  const { container, textTheme } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={[textTheme, iconTextStyle]}>{iconText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
});
export default IconText;
