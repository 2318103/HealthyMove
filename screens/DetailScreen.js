import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DetailScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Detail Latihan</Text>

      <Image
        source={require('../assets/images/pushup.png')}
        style={styles.image}
      />

      <Text style={styles.workoutTitle}>Push Up</Text>

      <Text style={styles.description}>
        Push Up merupakan latihan dasar yang membantu 
        memperkuat otot dada, bahu, dan lengan. Latihan 
        ini cocok untuk pemula dan dapat dilakukan di rumah.
      </Text>

      <View style={styles.info}>
        <Text style={styles.text}>Durasi : 10 Menit</Text>
        <Text style={styles.text}>Level : Pemula</Text>
        <Text style={styles.text}>Kalori : ±50 Kalori</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 15
  },
  workoutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 15
  },
  info: {
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    marginBottom: 5
  }
});
