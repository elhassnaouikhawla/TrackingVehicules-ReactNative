import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DriverLoginScreen from './DriverLoginScreen';
import AdminScreen from './AdminScreen';
import DriverScreen from './DriverScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DriverLogin"
          component={DriverLoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="AdminScreen"
          component={AdminScreen}
          options={{ title: 'Admin' }}
        />
        <Stack.Screen
          name="DriverScreen"
          component={DriverScreen}
          options={{ title: 'Driver' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;