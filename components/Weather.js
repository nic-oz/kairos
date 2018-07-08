import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature, city, country }) => {
  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color }
      ]}
    >
      <Text style={styles.tempText}>{temperature}˚</Text>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={200}
          name={weatherConditions[weather].icon}
          color={'#fff'}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>
          {city}, {country}
        </Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 40
  },
  headerContainer: {
    padding: 0
  },
  tempText: {
    paddingLeft: 20,
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 40
  },
  title: {
    fontSize: 40,
    color: '#fff'
  },
  subtitle: {
    fontSize: 20,
    color: '#fff'
  }
});

export default Weather;
