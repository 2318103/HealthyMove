import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';

import WorkoutCard from './components/WorkoutCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <Text style={styles.title}>
            HealthyMove
          </Text>

          <Text style={styles.subtitle}>
            Aplikasi Workout Harian
          </Text>
        </View>
        <WorkoutCard
  title="Push Up"
  duration="10 Menit"
  level="Pemula"
  image={require('./assets/images/pushup.png')}
/>

<WorkoutCard
  title="Sit Up"
  duration="15 Menit"
  level="Pemula"
  image={require('./assets/images/situp.png')}
/>

<WorkoutCard
  title="Jumping Jack"
  duration="5 Menit"
  level="Pemula"
  image={require('./assets/images/jumpingjack.png')}
/>

<WorkoutCard
  title="Plank"
  duration="7 Menit"
  level="Menengah"
  image={require('./assets/images/plank.png')}
/>

<WorkoutCard
  title="Squat"
  duration="12 Menit"
  level="Pemula"
  image={require('./assets/images/squat.png')}
/>
       

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },

  header: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center'
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },

  subtitle: {
    color: 'gray'
  }

});