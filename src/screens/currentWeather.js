import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utils/weatherType";
export default function CurrentWeather({ weatherData }) {
  const {
    bodyWrapper,
    container,
    description,
    feels,
    highloWrapper,
    highlow,
    message,
    tempStyle,
    wrapperContainer,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView
      style={[
        wrapperContainer,
        { borderStartColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="black"
        />
        <Text style={tempStyle}>{`${Math.round(temp)}°`}</Text>
        <Text style={feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
        <RowText
          messageOne={`High: ${Math.round(temp_max)}° `}
          messageTwo={`Low: ${Math.round(temp_min)}°`}
          conatinerStyle={highloWrapper}
          messageOneStyle={highlow}
          messageTwoStyle={highlow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        conatinerStyle={bodyWrapper}
        messageOneStyle={description}
        messageTwoStyle={message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyle: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highlow: {
    color: "black",
    fontSize: 20,
  },
  highloWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});
