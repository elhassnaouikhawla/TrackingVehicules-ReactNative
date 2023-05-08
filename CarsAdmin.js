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

const CarsAdmin = () => {
  const navigation = useNavigation();

  const CarList = () => {
    const [cars, setCars] = useState([
      { id: 1, brand: 'Toyota', model: 'Corolla', year: '2022', price: 200 },
      { id: 2, brand: 'Honda', model: 'Civic', year: '2022', price: 180 },
      { id: 3, brand: 'Ford', model: 'Mustang', year: '2023', price: 250 },
    ]);

    const handleDeleteCar = (id) => {
      setCars(cars.filter((car) => car.id !== id));
    };

    const onUpdateCars = (car) => {
      navigation.navigate('UpdateCarsScreen', { Car: car });
    };

    const onAddCars = () => {
      navigation.navigate('AddCarsScreen', { addCar: handleAddCar });
    };

    const handleAddCar = (brand, model, year, price) => {
      setCars((prevCars) => [
        ...prevCars,
        { id: prevCars.length + 1, brand: brand, model: model, year: year, price: price },
      ]);
    };

    return (
      <View style={styles.carCard}>
        <View style={styles.cardHeader}>
          <TouchableOpacity style={styles.addButton} onPress={onAddCars}>
            <Text style={styles.addButtonLabel}>Add a car</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          {cars.map((car) => (
            <View key={car.id} style={styles.car}>
              <Text style={styles.carName}>{car.brand} {car.model}</Text>
              <Text style={styles.carYear}>{car.year}</Text>
              <Text style={styles.carPrice}>${car.price} / day</Text>
              <View style={styles.carButtons}>
                <TouchableOpacity style={styles.updateButton} onPress={() => onUpdateCars(car)}>
                  <MaterialIcons name="edit" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteCar(car.id)}>
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
    <ImageBackground source={require('./images/CarsAdmin.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        
        <CarList />
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
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
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
    },
    carCard: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      marginBottom: 20,
      padding: 10,
      borderRadius: 5,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.20,
      shadowRadius: 2.60,
    
      elevation: 4,
    },
    carName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'white',
    },
    carImage: {
      width: '100%',
      height: 200,
      marginBottom: 10,
      resizeMode: 'cover',
    },
    
        carDescription: {
            fontSize: 16,
            color: 'white',
            marginBottom: 10,
          },
    
    carButtons: {
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
  export default CarsAdmin;