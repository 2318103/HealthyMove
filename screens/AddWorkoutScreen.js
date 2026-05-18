import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function AddWorkoutScreen({ navigation }) {

  const [nama, setNama] = useState('');
  const [durasi, setDurasi] = useState('');
  const [level, setLevel] = useState('');

  const API_URL =
    'https://6a0ae92421e445625696dbd3.mockapi.io/workouts';

  // ================= POST =================
  const addWorkout = async () => {

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

    try {

      await fetch(API_URL, {

        method: 'POST',

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
        'Jadwal latihan berhasil ditambahkan'
      );

      navigation.goBack();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Tambah Jadwal Latihan
      </Text>

      <Text style={styles.subtitle}>
        Atur workout harianmu agar tetap sehat 💪
      </Text>

      {/* Nama Latihan */}
      <Text style={styles.label}>
        🏋 Nama Latihan
      </Text>

      <TextInput
        placeholder="Contoh: Push Up"
        style={styles.input}
        value={nama}
        onChangeText={setNama}
      />

      {/* Durasi */}
      <Text style={styles.label}>
        ⏱ Durasi Latihan
      </Text>

      <TextInput
        placeholder="Contoh: 30 Menit"
        style={styles.input}
        value={durasi}
        onChangeText={setDurasi}
      />

      {/* Level */}
      <Text style={styles.label}>
        🔥 Tingkat Kesulitan
      </Text>

      <TextInput
        placeholder="Pemula / Menengah / Sulit"
        style={styles.input}
        value={level}
        onChangeText={setLevel}
      />

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={addWorkout}
      >
        <Text style={styles.buttonText}>
          Simpan Jadwal
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
    backgroundColor: '#4CAF50',
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