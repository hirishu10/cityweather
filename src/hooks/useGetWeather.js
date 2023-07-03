import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const fetchWeatherData = async () => {
    try {
      if (lat != undefined && lon != undefined) {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
          {
            method: "GET",
          }
        );
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      }
    } catch (error) {
      setError("Couldn't load weather");
      console.log("unable to load ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);

      await fetchWeatherData();
    })();

    return () => {};
  }, [loading, lat, lon]);

  return [loading, error, weather];
};
