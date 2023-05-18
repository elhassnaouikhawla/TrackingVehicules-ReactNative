import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Card } from 'react-native-elements';
import { ImageBackground } from 'react-native';

const UpdateDriverScreen = ({ route, navigation }) => {
  const { driver, onUpdateDriver } = route.params;
  const [firstName, setFirstName] = useState(driver.firstName);
  const [lastName, setLastName] = useState(driver.lastName);
  const [birthdate, setBirthdate] = useState(driver.birthdate);
  const [address, setAddress] = useState(driver.address);
  const [phoneNumber, setPhoneNumber] = useState(driver.phoneNumber);
  const [email, setEmail] = useState(driver.email);
  const [licenseNumber, setLicenseNumber] = useState(driver.licenseNumber);

  const handleUpdateDriver = () => {
    const updatedDriver = {
      id: driver.id,
      firstName,
      lastName,
      birthdate,
      address,
      phoneNumber,
      email,
      licenseNumber,
    };
    onUpdateDriver(updatedDriver);
    navigation.goBack();
  };

  return (
    <ImageBackground source={require('./images/driverpic1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <DatePicker
            style={styles.datepicker}
            date={birthdate}
            mode="date"
            placeholder="Birthdate"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2030-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={setBirthdate}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="License Number"
            value={licenseNumber}
            onChangeText={setLicenseNumber}
          />
          <Button title="Update Driver" onPress={handleUpdateDriver} />
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  datepicker: {
    width: '100%',
    marginBottom: 10,
  },
});

export default UpdateDriverScreen;