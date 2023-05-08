import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(null);

  const handleLogin = () => {
    if (role === 'driver' && username === 'driver' && password === 'driver') {
      console.log(role);
      navigation.navigate('DriverScreen');
    } else if (role === 'admin' && username === 'admin' && password === 'admin') {
      navigation.navigate('AdminScreen');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <ImageBackground source={require('./images/loginback.png')} style={styles.background}>
      <View style={styles.card}>
        <Image source={require('./images/gps.png')} style={styles.logo} />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon} onPress={() => setRole('driver')}>
            <MaterialIcons name="directions-car" size={25} color="#808080" />
            <Text style={styles.iconText}>Driver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => setRole('admin')}>
            <MaterialIcons name="person" size={25} color="#808080" />
            <Text style={styles.iconText}>Admin</Text>
          </TouchableOpacity>
        </View>
        {  (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Add a semi-transparent background color to the container
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    height: '70%', // Set the height of the container to 70% of the screen height
    justifyContent: 'center', // Add this to center the card vertically
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Set the background color to white with 70% transparency
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '90%', // Set the width of the card to 90% of the screen width
    maxWidth: 400, // Set the maximum width of the card to 400 (to avoid stretching on larger screens)
  },
  logo: {
    width: 35,
    height: 35,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    alignItems: 'center',
    marginRight: 40,
    marginLeft:   25,
  },
  iconText: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 5,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#000',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;