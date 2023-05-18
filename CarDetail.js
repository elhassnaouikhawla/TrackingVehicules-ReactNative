import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const CarDetail = ({ route }) => {
const { car } = route.params;

return (
<ImageBackground source={require('./images/CarsAdmin.jpg')} style={styles.backgroundImage}>
<View style={styles.container}>
        <Text style={styles.label}>Brand:</Text>
        <Text style={styles.value}>{car.brand}</Text>
        <Text style={styles.label}>Model:</Text>
        <Text style={styles.value}>{car.model}</Text>

        <Text style={styles.label}>Year:</Text>
        <Text style={styles.value}>{car.year}</Text>

        <Text style={styles.label}>Color:</Text>
        <Text style={styles.value}>{car.color}</Text>

        <Text style={styles.label}>License Plate:</Text>
        <Text style={styles.value}>{car.licensePlate}</Text>
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

export default CarDetail;




