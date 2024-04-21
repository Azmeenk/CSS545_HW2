import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Bye() {
  const [username, setUsername] = useState("");

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem("username", username);
      setUsername("");
      alert("Saved", `Username ${username} saved successfully.`);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleRestore = async () => {
    try {
      const restoredUsername = await AsyncStorage.getItem("username");
      if (restoredUsername !== null) {
        setUsername(restoredUsername);
        alert("Restored", `Username ${restoredUsername} restored.`);
      } else {
        alert("No Data", "No username data found.");
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        placeholderTextColor="#ccc"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <View style={styles.buttonContainer}>
        <Button color="#aaa" title="Save" onPress={handleSave} />
        <View style={styles.spacer} />
        <Button color="#aaa" title="Restore" onPress={handleRestore} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#555",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: "#fff",
    backgroundColor: "#444",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  spacer: {
    width: 10,
  },
});
