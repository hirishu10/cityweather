import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment/moment";

const City = ({ weatherData }) => {
  const {
    cityName,
    cityText,
    container,
    countryName,
    imageBackground,
    populationText,
    populationWrapper,
    riseSetText,
    riseSetWrapper,
    rowWrapper,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={imageBackground}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>

        <View style={[populationWrapper, rowWrapper]}>
          <IconText
            iconName={"user"}
            iconSize={50}
            iconColor={"red"}
            iconText={`Population: ${population}`}
            iconTextStyle={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowWrapper]}>
          <IconText
            iconName={"sunrise"}
            iconSize={50}
            iconColor={"white"}
            iconText={moment(sunrise).format("h:mm:ss a")}
            iconTextStyle={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconSize={50}
            iconColor={"white"}
            iconText={moment(sunset).format("h:mm:ss a")}
            iconTextStyle={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "tomato",
  },
  rowWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default City;
