import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/track1.jpg.jpg')}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image source={require('./images/gps.png')} style={styles.logo} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DriverLogin')}
        >
          <Text style={styles.buttonText}>Get started</Text>
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
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 20,
    marginTop: 20,
  },
  logo: {
    width: 35,
    height: 30,
  },
  button: {
    backgroundColor: '#d3d3d3', // couleur gris clair
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    width: '80%',
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;