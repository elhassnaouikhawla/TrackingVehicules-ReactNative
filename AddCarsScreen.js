import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddCarsScreen = ({ addCar }) => {
  const navigation = useNavigation();
  
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const handleAddCar = () => {
    if (brand.trim() === '' || model.trim() === '' || year.trim() === '' || color.trim() === '' || licensePlate.trim() === '') {
      alert('Please fill all fields');
      return;
    }
    const car = { brand, model, year, color, licensePlate };
    addCar(car);
    setBrand('');
    setModel('');
    setYear('');
    setColor('');
    setLicensePlate('');
    navigation.goBack();
  };

  return (
    <ImageBackground source={require('./images/CarsAdmin.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Brand"
            value={brand}
            onChangeText={setBrand}
          />
          <TextInput
            style={styles.input}
            placeholder="Model"
            value={model}
            onChangeText={setModel}
          />
          <TextInput
            style={styles.input}
            placeholder="Year"
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Color"
            value={color}
            onChangeText={setColor}
          />
          <TextInput
            style={styles.input}
            placeholder="License plate"
            value={licensePlate}
            onChangeText={setLicensePlate}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddCar}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#039BE5',
    borderRadius: 5,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

export default AddCarsScreen;