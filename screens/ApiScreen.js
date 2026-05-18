import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function ApiScreen({ navigation }) {

  const [data, setData] = useState([]);

  const API_URL =
    'https://6a0ae92421e445625696dbd3.mockapi.io/workouts';

  // ================= GET =================
  const getWorkout = async () => {

    try {

      const response = await fetch(API_URL);

      const json = await response.json();

      setData(json);

    } catch (error) {
      console.log(error);
    }
  };

  // ================= DELETE =================
  const deleteWorkout = async (id) => {

    try {

      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      Alert.alert(
        'Success',
        'Jadwal berhasil dihapus'
      );

      getWorkout();

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorkout();
  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Workout Schedule
      </Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('AddWorkout')
        }
      >
        <Text style={styles.buttonText}>
          + Tambah Jadwal
        </Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.name}>
              {item.nama}
            </Text>

            <Text>
              Durasi: {item.durasi}
            </Text>

            <Text>
              Level: {item.level}
            </Text>

            <View style={styles.buttonContainer}>

              <TouchableOpacity
                style={styles.editButton}

                onPress={() =>
                  navigation.navigate(
                    'EditWorkout',
                    { workout: item }
                  )
                }
              >
                <Text style={styles.buttonText}>
                  Edit
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() =>
                  deleteWorkout(item.id)
                }
              >
                <Text style={styles.buttonText}>
                  Delete
                </Text>
              </TouchableOpacity>

            </View>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 10
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center'
  },

  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10
  },

  editButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
    marginRight: 10
  },

  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }

});