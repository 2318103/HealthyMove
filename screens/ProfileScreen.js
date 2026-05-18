import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/images/pushup.png')}
        style={styles.image}
      />

      <Text style={styles.title}>HealthyMove</Text>

      <Text style={styles.description}>
        HealthyMove adalah aplikasi latihan olahraga 
        untuk pemula yang membantu pengguna melakukan 
        latihan harian dengan mudah dan praktis.
      </Text>

      <View style={styles.info}>
        <Text style={styles.text}>Versi Aplikasi : 1.0.0</Text>
        <Text style={styles.text}>Developer : M. Firman Afandi</Text>
        <Text style={styles.text}>Universitas : Itn</Text>
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
  image: {
    width: 150,
    height: 150,
    marginTop: 40,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16
  },
  info: {
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    marginBottom: 5
  }
});