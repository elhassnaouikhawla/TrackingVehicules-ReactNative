import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const DriverScreen = ({ driverId }) => {
  const navigation = useNavigation();

  const handleTripsPress = () => {
    navigation.navigate('TripDriver');
  };

  const handleIncidentsPress = () => {
    navigation.navigate('IncidentDriver');
  };

  const tripsData = [
    { id: 1, destination: 'Tanger', distance: '150 km', duration: '2 hours' },
    { id: 2, destination: 'Casablanca', distance: '300 km', duration: '4 hours' },
    { id: 3, destination: 'Agadir', distance: '250 km', duration: '3 hours' },
    // Ajoutez d'autres voyages improvisés ici
  ];

  const renderTripItem = ({ item }) => (
    <View style={styles.tripItem}>
      <Text style={styles.tripDestination}>{item.destination}</Text>
      <Text style={styles.tripInfo}>Distance: {item.distance}</Text>
      <Text style={styles.tripInfo}>Duration: {item.duration}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image style={styles.coverPhoto} source={require('./images/DriverDash1.jpg')} />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.driverCard}>
        {/* Afficher le driver ID */}
        <Text style={styles.driverIdText}>Driver ID: {driverId}</Text>
      </View>

      <View style={styles.iconContainer}>
        {/* Icône "Trips" */}
        <TouchableOpacity style={styles.icon} onPress={handleTripsPress}>
          <Icon name="car" size={28} color="#000" />
          <Text style={styles.iconText}>Trips</Text>
        </TouchableOpacity>

        {/* Icône "Incidents" */}
        <TouchableOpacity style={styles.icon} onPress={handleIncidentsPress}>
          <Icon name="warning" size={28} color="#000" />
          <Text style={styles.iconText}>Incidents</Text>
        </TouchableOpacity>
      </View>

      {/* Section "Liste des voyages" */}
      <View style={styles.tripListContainer}>
        <Text style={styles.tripListTitle}>List of Trips:</Text>
        <FlatList
          data={tripsData}
          renderItem={renderTripItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(128, 128, 128, 0.4)',
  },
  coverPhotoContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: 150,
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  coverPhotoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.9,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 8,
    marginTop: -20,
    alignSelf: 'center',
    zIndex: 1,
    elevation: 2,
  },
  searchBar: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  icon: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },

  driverCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
    alignItems: 'center',
  },
  driverIdText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  tripListContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 16,
    marginTop: 20,
  },
  tripListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tripItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  tripDestination: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tripInfo: {
    fontSize: 14,
    color: '#888',
  },
});

export default DriverScreen;