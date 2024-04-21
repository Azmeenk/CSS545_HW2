import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import { Audio } from "expo-av";
import * as DocumentPicker from "expo-document-picker";

export default function Hello({ navigation }) {
  const [img, setImg] = useState(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef();

  var [audio, setAudio] = useState([]);

  async function importAudio() {
    setAudio(
      await DocumentPicker.getDocumentAsync({
        type: "audio/*",
        copyToCacheDirectory: true,
      })
    );
  }

  async function playAudio() {
    console.log(audio?.assets[0]?.name);
    const audioUri = audio.assets[0].uri;

    const soundObject = new Audio.Sound();
    soundObject.setOnPlaybackStatusUpdate();

    await soundObject.loadAsync({ uri: audioUri });
    await soundObject.playAsync();
  }

  const saveImage = async () => {
    if (status === null) {
      requestPermission();
    }

    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container} ref={imageRef} collapsable={false}>
      <StatusBar style="light" />

      {audio && audio.assets && audio.assets.length > 0 ? (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>{audio.assets[0].name}</Text>
        </View>
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Audio selected</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={importAudio} style={styles.button}>
          <Text style={styles.buttonText}>Load Audio File</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={playAudio} style={styles.button}>
          <Text style={styles.buttonText}>Play Audio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Button color="#aaa" title="Take a Screenshot" onPress={saveImage} />

        <Button
          color="#aaa"
          title="Next Feature"
          onPress={() => navigation.navigate("Load User Settings")}
        />
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
  image: {
    height: 400,
    width: "100%",
  },
  placeholder: {
    height: 400,
    width: "100%",
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#555",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
