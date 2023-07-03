import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

export default function UpcomingWeather({ weatherData }) {
  const renderItems = ({ item }) => {
    return (
      <ListItem
        condition={item?.weather[0].main}
        dt_txt={item?.dt_txt}
        min={item?.main?.temp_min}
        max={item?.main?.temp_max}
      />
    );
  };

  return (
    <SafeAreaView style={styles.wrapperContainer}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={styles.imageBackground}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItems}
          keyExtractor={(item) => item?.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
});
