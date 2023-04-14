import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/track6.jpg')} style={styles.background}>
        <View style={styles.logoContainer}>
          <Image source={require('./images/gps.png')} style={styles.logo} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login as a driver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login as admin</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 30,
    height: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
