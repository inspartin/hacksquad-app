import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./src/HomeScreen";
import MyNavigation from "./src/Navigator/MyNavigation";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <StatusBar backgroundColor="#38bdf8" animated />
      <NavigationContainer>
        <MyNavigation />
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
