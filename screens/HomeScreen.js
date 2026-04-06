import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import WorkoutList from '../components/WorkoutList';

export default function HomeScreen() {
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      title: "Push Up",
      image: require('../assets/images/pushup.png')
    },
    {
      id: 2,
      title: "Sit Up",
      image: require('../assets/images/situp.png')
    },
    {
      id: 3,
      title: "Jumping Jack",
      image: require('../assets/images/jumpingjack.png')
    },
    {
      id: 4,
      title: "Plank",
      image: require('../assets/images/plank.png')
    },
    {
      id: 5,
      title: "Squat",
      image: require('../assets/images/squat.png')
    }
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <WorkoutList workouts={workouts} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});