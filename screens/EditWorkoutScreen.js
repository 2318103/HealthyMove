import React, { useState } from 'react';

import { supabase } from '../lib/supabase';

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

  // ================= UPDATE SUPABASE =================
  const updateWorkout = async () => {

    if (
      nama === '' ||
      durasi === '' ||
      level === ''
    ) {

      Alert.alert(
        'Warning',
        'Semua data harus diisi'
      );

      return;
    }

    const { error } =
      await supabase
        .from('workouts')
        .update({
          nama,
          durasi,
          level
        })
        .eq('id', workout.id);

    if (error) {

      console.log(error);

      Alert.alert(
        'Error',
        'Gagal update workout'
      );

    } else {

      Alert.alert(
        'Success',
        'Workout berhasil diupdate'
      );

      navigation.goBack();
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Edit Workout
      </Text>

      <Text style={styles.subtitle}>
        Perbarui jadwal latihanmu 💪
      </Text>

      {/* Nama Workout */}
      <Text style={styles.label}>
        🏋 Nama Workout
      </Text>

      <TextInput
        style={styles.input}
        value={nama}
        onChangeText={setNama}
        placeholder="Nama Workout"
      />

      {/* Durasi */}
      <Text style={styles.label}>
        ⏱ Durasi
      </Text>

      <TextInput
        style={styles.input}
        value={durasi}
        onChangeText={setDurasi}
        placeholder="Durasi Workout"
      />

      {/* Level */}
      <Text style={styles.label}>
        🔥 Level
      </Text>

      <TextInput
        style={styles.input}
        value={level}
        onChangeText={setLevel}
        placeholder="Level Workout"
      />

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={updateWorkout}
      >
        <Text style={styles.buttonText}>
          Update Workout
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },

  subtitle: {
    textAlign: 'center',
    marginBottom: 25,
    color: 'gray'
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    backgroundColor: '#f9f9f9'
  },

  button: {
    backgroundColor: 'orange',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }

});