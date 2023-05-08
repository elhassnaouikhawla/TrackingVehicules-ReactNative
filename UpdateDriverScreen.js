import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';
const UpdateDriverScreen = ({ route, navigation }) => {
  const { driver } = route.params;
  const [firstName, setFirstName] = useState(driver.firstName);
  const [lastName, setLastName] = useState(driver.lastName);
  const [birthDate, setBirthDate] = useState(driver.birthDate);
  const [address, setAddress] = useState(driver.address);
  const [phoneNumber, setPhoneNumber] = useState(driver.phoneNumber);
  const [email, setEmail] = useState(driver.email);
  const [licenseNumber, setLicenseNumber] = useState(driver.licenseNumber);

  const handleUpdateDriver = () => {
    // Update driver information in the database here
    // ...

    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('./images/driverpic1.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="License number"
              value={licenseNumber}
              onChangeText={setLicenseNumber}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Birth Date"
              value={birthDate}
              onChangeText={setBirthDate}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <TouchableOpacity style={styles.updateButton} onPress={handleUpdateDriver}>
            <Text style={styles.updateButtonText}>Update Information</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'transparent',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    card: {
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 5,
    },
    updateButton: {
      backgroundColor: '#008080',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    updateButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default UpdateDriverScreen;