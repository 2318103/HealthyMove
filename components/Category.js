import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Category() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pemula</Text>
      <Text style={styles.text}>Menengah</Text>
      <Text style={styles.text}>Lanjutan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  text: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: 10,
    borderRadius: 10
  }
});