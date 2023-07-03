import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment/moment";
import { weatherType } from "../utils/weatherType";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { main, date, item, temp, dateTextWrapper } = styles;

  return (
    <View style={item}>
      <View style={dateTextWrapper}>
        <Feather name={weatherType[condition]?.icon} size={50} color="white" />
        <Text style={main}>{condition}</Text>
      </View>
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "indianred",
  },
  main: {
    color: "white",
    fontSize: 18,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});

export default ListItem;
