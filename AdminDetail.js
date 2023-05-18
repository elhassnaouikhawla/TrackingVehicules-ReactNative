import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const AdminDetail = ({ route }) => {
  const { admin } = route.params;

  return (
    <ImageBackground source={require('./images/AdminScreenn.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>{admin.firstName} {admin.lastName}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{admin.email}</Text>
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

export default AdminDetail;