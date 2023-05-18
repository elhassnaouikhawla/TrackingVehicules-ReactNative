import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AddDriverScreen from './AddDriverScreen';
import UpdateDriverScreen from './UpdateDriverScreen';

const DriverAdmin = ({ navigation }) => {
  const [drivers, setDrivers] = useState([
    { 
      id: 1, 
      firstName: 'Hassnaoui', 
      lastName: 'khawla',
      birthdate: '2001-12-24',
      licenseNumber: '123456789',
      email: 'hassnaoui@gmail.com',
      address: 'Bournazel, Casablanca',
      phoneNumber: '065555555',
    },
    { 
      id: 2, 
      firstName: 'Jalali', 
      lastName: 'wafae',
      birthdate: '2000-08-22',
      licenseNumber: '987654321',
      email: 'jalali@gmail.com',
      address: 'Bernoussi, Casablanca',
      phoneNumber: '065555555', 
    },
  ]);

  const onUpdateDriver = (driver) => {
    navigation.navigate('UpdateDriverScreen', { driver, onUpdateDriver });
  };

  const handleDeleteDriver = (id) => {
    Alert.alert(
      'Delete Driver',
      'Are you sure you want to delete this driver?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteDriver(id) },
      ],
      { cancelable: true }
    );
  };

  const [showAddDriver, setShowAddDriver] = useState(false);

  const handleShowAddDriver = () => {
    setShowAddDriver(true);
  };

  const handleAddDriver = (newDriver) => {
    setDrivers([...drivers, newDriver]);
  };

  const renderDriver = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.driverContainer}>
          <Text style={styles.driverName}>{item.firstName} {item.lastName}</Text>
          <View style={styles.driverButtonsContainer}>
            <TouchableOpacity style={styles.updateButton} onPress={() => onUpdateDriver(item)}>
              <MaterialIcons name="edit" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteDriver(item.id)}>
              <MaterialIcons name="delete" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailButton} onPress={() => navigation.navigate('DriverDetail', { driver: item })}>
              <MaterialIcons name="details" size={19} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground source={require('./images/driverpic1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddDriverScreen', { handleAddDriver })}>
          <Text style={[styles.addButtonText, { fontWeight: 'bold' }]}>Add a Driver</Text>
        </TouchableOpacity>
        <FlatList
          data={drivers}
          renderItem={renderDriver}
          keyExtractor={(item) => item.id.toString()}
          style={[styles.flatList, { marginTop: 30}]}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  driverButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: '#0080FF',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  detailButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#0080FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-end', // Ajouter cette ligne
    marginRight: 2, // Ajouter cette ligne
    marginTop:20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 12 ,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center', // Ajouter cette ligne
    alignItems: 'center', // Ajouter cette ligne
  },
  driverContainer: {
    flexDirection: 'row', // Ajouter cette ligne
    justifyContent: 'space-between', // Ajouter cette ligne
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  driverDetails: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  flatList: {
    marginTop: 20,
    paddingBottom: 40,
  },
});

export default DriverAdmin;