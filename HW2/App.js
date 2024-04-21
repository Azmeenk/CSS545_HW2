import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Audio from "./Audio";
import Settings from "./Settings";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2c6bed" }, // Dark blue background
  headerTitleStyle: { color: "white" },
  headerTitleAlign: "center",
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Load Audio"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen
          name="Load & Save Audio"
          component={Audio}
          options={{
            headerStyle: { backgroundColor: "#1a1a1a" }, // Even darker theme for specific screens if needed
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Load User Settings"
          component={Settings}
          options={{
            headerStyle: { backgroundColor: "#1a1a1a" }, // Consistent dark theme
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
