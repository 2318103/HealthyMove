import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WorkoutCard({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});