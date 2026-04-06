import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Category from '../components/Category';
import WorkoutCard from '../components/WorkoutCard';
import WorkoutList from '../components/WorkoutList';

export default function HomeScreen() {
  return (
    <ScrollView style={{ padding: 15 }}>
      <Header />
      <Category />
      <WorkoutCard />
      <WorkoutList />
    </ScrollView>
  );
}