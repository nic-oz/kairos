import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Weather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer} />
      <View style={styles.bodyContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1
  },
  bodyContainer: {
    flex: 1
  }
});

export default Weather;
