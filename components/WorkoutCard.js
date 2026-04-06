import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

const WorkoutCard = ({ title, duration, level, image }) => {
  return (
    <View style={styles.card}>

      <Image
        source={image}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.duration}>Durasi : {duration}</Text>
        <Text style={styles.level}>Level : {level}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5
  },

  image: {
    width: '100%',
    height: 180
  },

  info: {
    padding: 15
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  duration: {
    color: 'gray',
    marginTop: 5
  },

  level: {
    marginTop: 5,
    color: '#1e90ff',
    fontWeight: 'bold'
  }
});

export default WorkoutCard;