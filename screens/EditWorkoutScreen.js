import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function EditWorkoutScreen({
  route,
  navigation
}) {

  const { workout } = route.params;

  const [nama, setNama] = useState(workout.nama);
  const [durasi, setDurasi] = useState(workout.durasi);
  const [level, setLevel] = useState(workout.level);

  const API_URL =
    'https://6a0ae92421e445625696dbd3.mockapi.io/workouts';

  // ================= PUT =================
  const updateWorkout = async () => {

    try {

      await fetch(`${API_URL}/${workout.id}`, {

        method: 'PUT',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          nama,
          durasi,
          level
        })
      });

      Alert.alert(
        'Success',
        'Workout berhasil diupdate'
      );

      navigation.goBack();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Edit Workout
      </Text>

      <TextInput
        style={styles.input}
        value={nama}
        onChangeText={setNama}
      />

      <TextInput
        style={styles.input}
        value={durasi}
        onChangeText={setDurasi}
      />

      <TextInput
        style={styles.input}
        value={level}
        onChangeText={setLevel}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={updateWorkout}
      >
        <Text style={styles.buttonText}>
          Update
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15
  },

  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }

});