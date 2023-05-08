import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const AddDriverScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleAddDriver = () => {
    const newDriver = {
      name,
      licenseNumber,
      email,
      phoneNumber,
      birthdate
    };
    navigation.navigate('DriverAdmin', { newDriver });
  };

  return (
    <ImageBackground
      source={require('./images/driverpic1.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Card containerStyle={styles.card}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Full name"
            />
            <TextInput
              style={styles.input}
              value={licenseNumber}
              onChangeText={setLicenseNumber}
              placeholder="Driver's license number"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Phone number"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              value={licenseNumber}
              onChangeText={setLicenseNumber}
              placeholder="License number"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              value={birthdate}
              onChangeText={setBirthdate}
              placeholder="Birthdate"
              keyboardType="numeric"
            />
            <Button
              title="Add"
              onPress={handleAddDriver}
              color="#FFA500"
            />
          </Card>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF'
  },
});

export default AddDriverScreen;