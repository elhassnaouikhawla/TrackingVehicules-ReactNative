import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UpdateTripsScreen = ({ route, navigation }) => {
  const { trip } = route.params;
  const [startLocation, setStartLocation] = useState(trip.startLocation);
  const [endLocation, setEndLocation] = useState(trip.endLocation);
  const [startDate, setStartDate] = useState(trip.startDate);
  const [endDate, setEndDate] = useState(trip.endDate);
  const [distance, setDistance] = useState(trip.distance);
  const [price, setPrice] = useState(trip.price);

  const handleUpdateTrip = () => {
    // Update trip information in the database here
    // ...

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Trip Information</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Start Location"
          value={startLocation}
          onChangeText={setStartLocation}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="End Location"
          value={endLocation}
          onChangeText={setEndLocation}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Start Date"
          value={startDate}
          onChangeText={setStartDate}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="End Date"
          value={endDate}
          onChangeText={setEndDate}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Distance"
          value={distance}
          onChangeText={setDistance}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
        />
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateTrip}>
        <Text style={styles.buttonLabel}>Update Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  updateButton: {
    backgroundColor: '#0080FF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UpdateTripsScreen;