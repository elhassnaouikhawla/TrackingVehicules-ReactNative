import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const TripsAdmin = () => {
  const navigation = useNavigation();

  const TripList = () => {
    const [trips, setTrips] = useState([
      { id: 1, name: 'Trip to agadir', date: '2023-05-01' },
      { id: 2, name: 'Trip to casablanca', date: '2023-07-15' },
      { id: 3, name: 'Trip to Essaouira', date: '2023-09-08' },
    ]);

    const handleDeleteTrip = (id) => {
      setTrips(trips.filter((trip) => trip.id !== id));
    };

    const onUpdateTrips = (trip) => {
      navigation.navigate('UpdateTripsScreen', { Trips: trip });
    };

    const onAddTrips = () => {
      navigation.navigate('AddTripsScreen', { addTrip: handleAddTrip });
    };

    const handleAddTrip = (title, description) => {
      setTrips((prevTrips) => [
        ...prevTrips,
        { id: prevTrips.length + 1, name: title, date: new Date().toISOString() },
      ]);
    };

    return (
      <View style={styles.tripCard}>
        <View style={styles.cardHeader}>
          <TouchableOpacity style={styles.addButton} onPress={onAddTrips}>
            <Text style={styles.addButtonLabel}>Add a trip</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          {trips.map((trip) => (
            <View key={trip.id} style={styles.trip}>
              <Text style={styles.tripName}>{trip.name}</Text>
              <Text style={styles.tripDate}>{trip.date}</Text>
              <View style={styles.tripButtons}>
                <TouchableOpacity style={styles.updateButton} onPress={() => onUpdateTrips(trip)}>
                  <MaterialIcons name="edit" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTrip(trip.id)}>
                  <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <ImageBackground source={require('./images/TripsScreenn.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.header}>Trips Admin</Text>
        <TripList />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end', // modifier pour que le bouton soit aligné à droite
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#0080FF',
        paddingVertical: 10, // modifier la propriété paddingVertical au lieu de padding
        paddingHorizontal: 15, // ajouter la propriété paddingHorizontal pour ajuster la longueur
        borderRadius: 5,
      },
      addButtonLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // ajout de la propriété textAlign
      },
    scrollView: {
      padding: 20,
    },
    tripCard: {
        backgroundColor: 'rgba(0,0,0,0.8)', // ajout d'un fond noir transparent
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      
        elevation: 4,
      },
    tripName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'white',
    },
    tripDate: {
      fontSize: 16,
      color: 'white',
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
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default TripsAdmin;