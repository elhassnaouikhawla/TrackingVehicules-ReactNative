import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const UpdateTripsScreen = ({ route, navigation }) => {
const { trip, onUpdateTrips } = route.params;
const [title, setTitle] = useState(trip.title);
const [description, setDescription] = useState(trip.description);
const [dateOfDeparture, setDateOfDeparture] = useState(trip.dateOfDeparture);
const [dateOfArrival, setDateOfArrival] = useState(trip.dateOfArrival);
const [driverName, setDriverName] = useState(trip.driverName);
const [carId, setCarId] = useState(trip.carId);

const handleUpdateTrips = () => {
const updatedTrip = {
id: trip.id,
title,
description,
dateOfDeparture,
dateOfArrival,
driverName,
carId,
};
onUpdateTrips(updatedTrip);
navigation.goBack();
};

return (
<ImageBackground source={require('./images/TripsScreenn.jpg')} style={styles.backgroundImage}>
<View style={styles.container}>
<View style={styles.card}>
<TextInput
         style={styles.input}
         placeholder="Title"
         value={title}
         onChangeText={setTitle}
       />
<TextInput
         style={styles.input}
         placeholder="Description"
         value={description}
         onChangeText={setDescription}
       />
<TextInput
         style={styles.input}
         placeholder="Date of Departure"
         value={dateOfDeparture}
         onChangeText={setDateOfDeparture}
       />
<TextInput
         style={styles.input}
         placeholder="Date of Arrival"
         value={dateOfArrival}
         onChangeText={setDateOfArrival}
       />
<TextInput
         style={styles.input}
         placeholder="Driver Name"
         value={driverName}
         onChangeText={setDriverName}
       />
<TextInput
         style={styles.input}
         placeholder="Car ID"
         value={carId}
         onChangeText={setCarId}
       />
  <TouchableOpacity style={styles.updateButton} onPress={handleUpdateTrips}>
        <Text style={styles.buttonLabel}>Update </Text>
      </TouchableOpacity>
    </View>
  </View>
</ImageBackground>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
padding: 20,
},
card: {
backgroundColor: '#EDEDED',
borderRadius: 10,
padding: 20,
},
input: {
width: '100%',
marginBottom: 10,
padding: 10,
backgroundColor: '#fff',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 4,
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
backgroundImage: {
flex: 1,
resizeMode: 'cover',
justifyContent: 'center',
},
});

export default UpdateTripsScreen;