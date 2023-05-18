import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const AddAdminScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAddAdmin = () => {
    const newAdmin = {
      name,
      email,
      password
    };
    navigation.navigate('AdminAdmin', { newAdmin });
  };

  return (
    <ImageBackground
      source={require('./images/AdminScreenn.png')}
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
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry
            />
            <Button
              title="Add"
              onPress={handleAddAdmin}
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

export default AddAdminScreen;