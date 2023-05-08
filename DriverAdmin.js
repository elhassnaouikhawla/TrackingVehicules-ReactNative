import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AddDriverScreen from './AddDriverScreen';
import UpdateDriverScreen from './UpdateDriverScreen';

const DriverAdmin = ({ navigation }) => {
  const [drivers, setDrivers] = useState([
    { id: 1, firstName: 'Hassnaoui', lastName: 'khawla', birthDate: '24/12/2001', address: 'Casablanca', phoneNumber: '0719277743', email: 'khawlaelhassnaoui38@gmail.com' , LicenseNumber: '1234567' },
    { id: 2, firstName: 'Jalali', lastName: 'wafae', birthDate: '02/07/2000', address: 'Casablanca', phoneNumber: '0661345629', email: 'wafaajalali@gmail.com', LicenseNumber: '1234567'  },
  ]);

  const onUpdateDriver = (driver) => {
    navigation.navigate('UpdateDriverScreen', { driver });
  };

  const handleDeleteDriver = (id) => {
    setDrivers(drivers.filter((driver) => driver.id !== id));
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
      <View style={styles.driverContainer}>
        <Text style={styles.driverName}>{item.firstName} {item.lastName}</Text>
        <Text style={styles.driverDetails}>Birthdate: {item.birthDate}</Text>
        <Text style={styles.driverDetails}>Address: {item.address}</Text>
        <Text style={styles.driverDetails}>Phone Number: {item.phoneNumber}</Text>
        <Text style={styles.driverDetails}>LicenseNumber: {item.LicenseNumber}</Text>
        <Text style={styles.driverDetails}> {item.email}</Text>
        <View style={styles.driverButtonsContainer}>
          <TouchableOpacity style={styles.updateButton} onPress={() => onUpdateDriver(item)}>
            <MaterialIcons name="edit" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteDriver(item.id)}>
            <MaterialIcons name="delete" size={24} color="#ff0000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground source={require('./images/driverpic1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddDriverScreen', { handleAddDriver })}>
          <Text style={styles.addButtonText}>Add Driver</Text>
        </TouchableOpacity>
        <FlatList
          data={drivers}
          renderItem={renderDriver}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  driverButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
      },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addButton: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    addButtonText: {
      color: '#000',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    driverContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    driverName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    driverDetails: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
    },
    flatList: {
      marginTop: 20, // added this line to move the FlatList down
      paddingBottom: 40,
    },
      });


export default DriverAdmin;