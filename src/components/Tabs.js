import CurrentWeather from "../screens/currentWeather";
import UpcomingWeather from "../screens/upcomingWeather";
import City from "../screens/city";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Tabs({ weather }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato",
        },
      }}
    >
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming"
        // component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
