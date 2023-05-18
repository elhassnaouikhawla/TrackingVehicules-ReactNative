import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { ImageBackground } from 'react-native';

const UpdateAdminScreen = ({ route, navigation }) => {
  const { admin, onUpdateAdmin } = route.params;
  const [name, setName] = useState(admin.name);
  const [email, setEmail] = useState(admin.email);

  const handleUpdateAdmin = () => {
    const updatedAdmin = {
      id: admin.id,
      name,
      email,
    };
    onUpdateAdmin(updatedAdmin);
    navigation.goBack();
  };

  return (
    <ImageBackground source={require('./images/AdminScreenn.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Button title="Update" onPress={handleUpdateAdmin} color="#FFA500" />
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default UpdateAdminScreen;