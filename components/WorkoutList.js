import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkoutList() {
  return (
    <View>
      <Text style={styles.title}>Rekomendasi Latihan</Text>

      <Text>• Jalan kaki</Text>
      <Text>• Stretching</Text>
      <Text>• Yoga ringan</Text>
      <Text>• Sit up</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 10
  }
});