import React, { useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import WorkoutCard from './WorkoutCard';

export default function WorkoutList({ workouts }) {

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      data={workouts}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}

      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}

      renderItem={({ item, index }) => {

        const inputRange = [
          -1,
          0,
          150 * index,
          150 * (index + 2)
        ];

        const opacity = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 0.8, 0],
        });

        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 0.8, 0.7],
        });

        const translateY = scrollY.interpolate({
          inputRange,
          outputRange: [0, 0, 0, -50],
        });

        return (
          <Animated.View
            style={{
              opacity,
              transform: [
                { scale },
                { translateY }
              ]
            }}
          >
            <WorkoutCard
              title={item.title}
              image={item.image}
            />
          </Animated.View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  }
});