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
import TripsAdmin from './TripsAdmin';
import UpdateTripsScreen from './UpdateTripsScreen';
import AddTripsScreen from './AddTripsScreen';
import CarsAdmin from './CarsAdmin';
import AddCarsScreen from './AddCarsScreen';
import DriverDetail from './DriverDetail';
import TripsDetail from './TripsDetail';
import UpdateCarsScreen from './UpdateCarsScreen';
import CarDetail from './CarDetail';
import AdminAdmin from './AdminAdmin';
import AddAdminScreen from './AddAdminScreen';
import UpdateAdminScreen from './UpdateAdminScreen';
import AdminDetail from './AdminDetail';
import TripDriver from './TripDriver';
import IncidentDriver from './IncidentDriver';
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
          name="DriverDetail"
          component={DriverDetail}
          options={{ title: 'Detail' }}
        />
        <Stack.Screen
          name="TripsAdmin"
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
          name="TripsDetail"
          component={TripsDetail}
          options={{ title: 'Detail' }}
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
        <Stack.Screen
          name="UpdateCarsScreen"
          component={UpdateCarsScreen}
          options={{ title: 'Cars' }}
        />
        <Stack.Screen name="CarDetail" component={CarDetail} options={{ title: 'Car Detail' }} />
        <Stack.Screen name="AdminAdmin" component={AdminAdmin} />
        <Stack.Screen
          name="AddAdminScreen"
          component={AddAdminScreen}
          options={{ title: 'AddAdmin' }}
        />
        <Stack.Screen
          name="UpdateAdminScreen"
          component={UpdateAdminScreen}
          options={{ title: 'UpdateAdmin' }}
        />
         <Stack.Screen
          name="AdminDetail"
          component={AdminDetail}
          options={{ title: 'AdminDetail' }}
        />
        <Stack.Screen
          name="TripDriver"
          component={TripDriver}
          options={{ title: 'TripsDriver' }}
        />
        <Stack.Screen
          name="IncidentDriver"
          component={IncidentDriver}
          options={{ title: 'Incident' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;