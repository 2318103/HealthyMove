import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput
} from "react-native";

const workouts = [
  {
    title: "Push Up",
    image: require("../assets/images/pushup.png")
  },
  {
    title: "Sit Up",
    image: require("../assets/images/situp.png")
  },
  {
    title: "Plank",
    image: require("../assets/images/plank.png")
  }
];

export default function FormScreen() {

  // state latihan dipilih
  const [selected, setSelected] = useState(null);

  // state form
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  // submit form
  const handleSubmit = () => {

    if (!selected) {
      Alert.alert("Warning", "Pilih latihan terlebih dahulu");
      return;
    }

    if (name === "" || duration === "" || level === "") {
      Alert.alert("Warning", "Semua form harus diisi");
      return;
    }

    Alert.alert(
      "Workout Success",
      `Nama : ${name}

Durasi : ${duration}

Level : ${level}

Workout : ${selected.title}`
    );
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Workout Registration
      </Text>

      <Text style={styles.subtitle}>
        Pilih latihan favoritmu
      </Text>

      {/* LIST WORKOUT */}
      {workouts.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.card,
            selected?.title === item.title && styles.selected
          ]}
          onPress={() => setSelected(item)}
        >

          <Image
            source={item.image}
            style={styles.image}
          />

          <View style={styles.info}>
            <Text style={styles.workout}>
              {item.title}
            </Text>
          </View>

        </TouchableOpacity>
      ))}

      {/* FORM */}
      <View style={styles.formContainer}>

        <Text style={styles.formTitle}>
          Workout Form
        </Text>

        <TextInput
          placeholder="Masukkan Nama"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Masukkan Durasi"
          style={styles.input}
          value={duration}
          onChangeText={setDuration}
        />

        <TextInput
          placeholder="Masukkan Level"
          style={styles.input}
          value={level}
          onChangeText={setLevel}
        />

      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>
          SIMPAN LATIHAN
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 15
  },

  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent"
  },

  selected: {
    borderColor: "#4CAF50"
  },

  image: {
    width: "100%",
    height: 180
  },

  info: {
    padding: 10
  },

  workout: {
    fontSize: 16,
    fontWeight: "bold"
  },

  formContainer: {
    marginTop: 10,
    marginBottom: 20
  },

  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }

});