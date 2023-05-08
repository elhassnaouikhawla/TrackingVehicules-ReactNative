import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DriverLoginScreen from './DriverLoginScreen';
import AdminScreen from './AdminScreen';
import DriverScreen from './DriverScreen';
import UpdateDriverScreen from './UpdateDriverScreen';
import DriverAdmin from './DriverAdmin';
import AddDriverScreen from './AddDriverScreen';
import TripsAdmin from './TripsAdmin'; // Import the new component
import UpdateTripsScreen from './UpdateTripsScreen';
import AddTripsScreen from './AddTripsScreen';
import CarsAdmin from './CarsAdmin';
import AddCarsScreen from './AddCarsScreen';
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
          options={{ title: 'Login', headerShown: false }}
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
        <Stack.Screen
          name="DriverAdmin"
          component={DriverAdmin}
          options={{ title: 'Driver Admin' }}
        />
        <Stack.Screen
          name="AddDriverScreen"
          component={AddDriverScreen}
          options={{ title: 'Add Driver' }}
        />
        <Stack.Screen
          name="UpdateDriverScreen"
          component={UpdateDriverScreen}
          options={{ title: 'Update Driver' }}
        />
        <Stack.Screen
          name="TripsAdmin" // Add the new screen
          component={TripsAdmin}
          options={{ title: 'Trips Admin' }}
        />
        <Stack.Screen
           name="UpdateTripsScreen"
          component={UpdateTripsScreen}
           options={{ title: 'Update Trip' }}
/>
<Stack.Screen
          name="AddTripsScreen"
          component={AddTripsScreen}
          options={{ title: 'Add Trips' }}
        />
        <Stack.Screen
          name="CarsAdmin"
          component={CarsAdmin}
          options={{ title: 'Cars' }}
        />
        <Stack.Screen
          name="AddCarsScreen"
          component={AddCarsScreen}
          options={{ title: 'Cars' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;