import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const DriverDetail = ({ route }) => {
  const { driver } = route.params;

  return (
    <ImageBackground source={require('./images/driverpic1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.value}>{driver.firstName}</Text>

        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.value}>{driver.lastName}</Text>

        <Text style={styles.label}>Birthdate:</Text>
        <Text style={styles.value}>{driver.birthdate}</Text>

        <Text style={styles.label}>License Number:</Text>
        <Text style={styles.value}>{driver.licenseNumber}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{driver.email}</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{driver.address}</Text>
        <Text style={styles.label}>phone Number:</Text>
        <Text style={styles.value}>{driver.phoneNumber}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#fff',
  },
});

export default DriverDetail;