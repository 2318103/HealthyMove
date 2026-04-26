import React from 'react';
import { View } from 'react-native';
import WorkoutCard from './WorkoutCard';

export default function WorkoutList({ workouts }) {
  return (
    <View>
      {workouts.map((item) => (
        <WorkoutCard 
          key={item.id}
          title={item.title}
          image={item.image}
        />
      ))}
    </View>
  );
}