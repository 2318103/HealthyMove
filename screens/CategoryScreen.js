import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kategori Latihan</Text>

      <View style={styles.card}>
        <Image 
          source={require('../assets/images/pushup.png')}
          style={styles.image}
        />
        <Text>Pemula</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('../assets/images/plank.png')}
          style={styles.image}
        />
        <Text>Menengah</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('../assets/images/squat.png')}
          style={styles.image}
        />
        <Text>Lanjutan</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100
  }
});