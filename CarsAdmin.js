import React, { useState } from 'react';
import { ImageBackground, StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import AddCarsScreen from './AddCarsScreen';
import CarDetail from './CarDetail';
const CarsAdmin = () => {
  const navigation = useNavigation();
  const [cars, setCars] = useState([
    { id: 1, brand: 'KN', model: 'Model 1', year: 2021, color: 'Red', licensePlate: 'ABC123' },
    { id: 2, brand: 'FIAT', model: 'Model 2', year: 2022, color: 'Blue', licensePlate: 'DEF456' },
    { id: 3, brand: 'Ford', model: 'Model 3', year: 2023, color: 'Green', licensePlate: 'GHI789' },
  ]);

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const onUpdateCars = (car) => {
    navigation.navigate('UpdateCarsScreen', { car });
  };
  const [showAddCars, setShowAddCars] = useState(false);

  const handleShowAddCars = () => {
    setShowAddCars(true);
  };
  const handleAddCars = (newCar) => {
    setCars([...Cars, newCar]);
  };
  const onShowCarDetail = (car) => {
    navigation.navigate('CarDetail', { car });
  };
  const CarList = () => {
    return (
      <View style={styles.carCard}>
        <ScrollView style={styles.scrollView}>
          {cars.map((car, index) => (
            <View key={car.id} style={[styles.car, index === 0 ? { marginTop: 10 } : null]}>
              <View style={styles.carNameContainer}>
                <Text style={styles.carName}>{car.brand}</Text>
                <View style={[styles.carButtons, { marginTop: 15 }]}>
                  <TouchableOpacity style={styles.updateButton} onPress={() => onUpdateCars(car)}>
                    <MaterialIcons name="edit" size={19} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteCar(car.id)}>
                    <MaterialIcons name="delete" size={19} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.detailButton} onPress={() => onShowCarDetail(car)}>
  <MaterialIcons name="details" size={19} color="black" />
</TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };



  return (
    <ImageBackground source={require('./images/CarsAdmin.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddCarsScreen', { handleAddCars })}>
          <Text style={[styles.addButtonText, { fontWeight: 'bold' }]}>Add a Car</Text>
        </TouchableOpacity>
            <CarList />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#0080FF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    padding: 20,
  },
  carCard: {
    marginBottom: 70,
    marginTop: 0,
    width: '100%',
    marginTop: 70,
  },
  car: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    shadowColor: 'black',
    marginTop:20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.6,
    elevation: 4,
    width: '100%',
    marginLeft: 10,
    
  },
  carNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  carButtons: {
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CarsAdmin;