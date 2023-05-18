import React, { useState } from 'react';
import { ImageBackground, StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import UpdateTripsScreen from './UpdateTripsScreen';
import TripsDetail from './TripsDetail';

const TripDriver = () => {
  const [trips, setTrips] = useState([
    {
      id: 1,
      title: 'Trip to Agadir',
      description: 'Work trip',
      dateOfDeparture: '24/12/2023',
      dateOfArrival: '24/1/2024',
      driverName: 'Khawla',
      carId: '12',
    },
    {
      id: 2,
      title: 'Trip to Sale',
      description: 'Visit trip',
      dateOfDeparture: '2/2/2024',
      dateOfArrival: '3/03/2024',
      driverName: 'Wafae',
      carId: '12',
    },
    ].sort((a, b) => a.id - b.id));
  

  const navigation = useNavigation();

  const onUpdateTrips = (trip) => {
    navigation.navigate('UpdateTripsScreen', { trip, onUpdateTrips });
  };

  const onAddTrips = () => {
    navigation.navigate('AddTripsScreen', { addTrip: handleAddTrip });
  };

  const handleAddTrip = (title, description) => {
    setTrips((prevTrips) => [
      ...prevTrips,
      { id: prevTrips.length + 1, title, description },
    ]);
  };

  const handleDeleteTrip = (tripId) => {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
  };

  const handleCompleteTrip = (tripId) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) =>
        trip.id === tripId ? { ...trip, completed: true } : trip
      )
    );
  };

  const renderTrip = (trip) => {
    return (
      <View key={trip.id} style={[styles.trip, { width: '100%' }]}>
        <View style={styles.tripHeader}>
          <Text style={styles.tripName}>{trip.title}</Text>
          <View style={styles.tripButtons}>
            <TouchableOpacity style={styles.updateButton} onPress={() => onUpdateTrips(trip)}>
              <MaterialIcons name="edit" size={18} color="black" />
            </TouchableOpacity>
            
            {trip.completed ? (
              <TouchableOpacity style={styles.checkButton} onPress={() => handleDeleteTrip(trip.id)}>
                <MaterialIcons name="check" size={18} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleCompleteTrip(trip.id)}
              >
                <MaterialIcons name="check" size={18} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text style={styles.tripDate}>{trip.dateOfDeparture}</Text>
      </View>
    );
  };

  return (
    <ImageBackground source={require('./images/TD.jpg')} style={styles.backgroundImage}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardHeader}>
          
        </View>
        {trips.map(renderTrip)}
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', 
    },
    tripHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%', 
    },
    detailButton: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      marginLeft: 10,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 20,
      marginBottom: 20,
      width: '100%', 
      paddingBottom: 40,
      width: '100%', 
    },
    addButton: {
      backgroundColor: '#0080FF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    addButtonLabel: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    scrollView: {
      padding: 20,
      width: '100%', 
    },
    trip: {
      marginBottom: 20,
      padding: 10,
      borderRadius: 5,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      width: '100%',
    },
    tripName: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#fff',
    },
    tripDate: {
      fontSize: 10,
      color: '#fff',
      marginBottom: 10,
    },
    tripButtons: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    updateButton: {
      backgroundColor: '#0080FF',
      padding: 10,
      borderRadius: 5,
      marginRight: 10,
    },
    deleteButton: {
      backgroundColor: '#FF0000',
      padding: 10,
      borderRadius: 5,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    scrollView: {
        padding: 20,
        width: '100%',
        lexDirection: 'column',  // Ajoutez cette ligne
      },
  });
  export default TripDriver;