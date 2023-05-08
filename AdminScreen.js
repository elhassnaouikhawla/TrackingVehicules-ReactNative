import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import DriverAdmin from './DriverAdmin';

const Stack = createStackNavigator();

const AdminScreen = ({ navigation }) => {
  const [trips, setTrips] = useState([
    { id: '1', DriverName: 'khawla', startDate: '20/05/2023', endDate: '25/05/2023', destination: require('./images/cardAd.jpg'), destinationName: 'Agadir' },
    { id: '2', DriverName: 'wafae', startDate: '15/06/2023', endDate: '22/06/2023', destination: require('./images/cardAd.jpg'), destinationName: 'Casablanca' },
    { id: '3', DriverName: 'imrane', startDate: '10/07/2023', endDate: '20/07/2023', destination: require('./images/cardAd.jpg'), destinationName: 'Tanger' },
    { id: '4', DriverName: 'ayoub', startDate: '01/08/2023', endDate: '10/08/2023', destination: require('./images/cardAd.jpg'), destinationName: 'Rabat' },
    { id: '5', DriverName: 'ines', startDate: '05/09/2023', endDate: '15/09/2023', destination: require('./images/cardAd.jpg'), destinationName: 'Sale' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.tripCard}>
      <Image source={item.destination} style={styles.cardBackground} />
      <View style={styles.cardContent}>
        <Text style={styles.destinationText}>{item.destinationName}</Text>
        <Text style={styles.cardText}>{item.DriverName}</Text>
        <Text style={styles.cardText}>{item.startDate} - {item.endDate}</Text>
      </View>
    </View>
  );

  const handleDriverPress = () => {
    navigation.navigate('DriverAdmin');
  };
  const handleTripsPress = () => {
    navigation.navigate('TripsAdmin');
  };
  const handleCarsPress = () => {
    navigation.navigate('CarsAdmin');
  }; 
  return (
    <View style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image style={styles.coverPhoto} source={require('./images/trackin-car.jpg')} />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon} onPress={handleDriverPress}>
          <Icon name="person" size={28} color="#000" />
          <Text style={styles.iconText}>Drivers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={handleTripsPress}>
          <Icon name="car" size={28} color="#000" />
          <Text style={styles.iconText}>Trips</Text>
       </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={handleCarsPress}>
          <Icon name="bus" size={28} color="#000" />
          <Text style={styles.iconText}>Cars</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.tripsContainer}>
        <FlatList data={trips} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  tripCard: {
    width: '90%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 10,
    alignSelf: 'center',
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  destinationText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  cardContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(128, 128, 128, 0.4)',
    
  },
  coverPhotoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    backgroundColor: '#FFF',
    overflow: 'hidden',
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
  tripsContainer: {
    flex: 1,
    padding: 20,
  },
  cardText: {
    color: 'white',
  },
});
  
  export default AdminScreen;