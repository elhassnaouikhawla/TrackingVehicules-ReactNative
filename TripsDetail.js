import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const TripsDetail = ({ route }) => {
  const { trip } = route.params;

  return (
    <ImageBackground source={require('./images/TripsScreenn.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.value}>{trip.title}</Text>

        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{trip.description}</Text>

        <Text style={styles.label}>Date of Departure:</Text>
        <Text style={styles.value}>{trip.dateOfDeparture}</Text>

        <Text style={styles.label}>Date of arrival:</Text>
        <Text style={styles.value}>{trip.dateOfArrival}</Text>

        <Text style={styles.label}>Driver Name:</Text>
        <Text style={styles.value}>{trip.driverName}</Text>

        <Text style={styles.label}>Car Id:</Text>
        <Text style={styles.value}>{trip.carId}</Text>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#fff',
  },
});

export default TripsDetail;