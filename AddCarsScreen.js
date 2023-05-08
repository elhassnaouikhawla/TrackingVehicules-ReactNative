import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';

const AddCarsScreen = ({ addCar }) => {
const navigation = useNavigation(); // get the navigation object

const [make, setMake] = useState('');
const [model, setModel] = useState('');
const [year, setYear] = useState('');
const [color, setColor] = useState('');
const [licensePlate, setLicensePlate] = useState('');

const handleAddCar = () => {
if (make.trim() === '' || model.trim() === '' || year.trim() === '' || color.trim() === '' || licensePlate.trim() === '') {
alert('Please fill all fields');
return;
}
addCar(make, model, year, color, licensePlate);
setMake('');
setModel('');
setYear('');
setColor('');
setLicensePlate('');
navigation.goBack(); // navigate back to previous screen
};

return (
<ImageBackground source={require('./images/CarsScreen.jpg')} style={styles.backgroundImage}>
<View style={styles.container}>
<Card containerStyle={styles.card}>
<TextInput
style={styles.input}
placeholder="Make"
value={make}
onChangeText={text => setMake(text)}
/>
<TextInput
style={styles.input}
placeholder="Model"
value={model}
onChangeText={text => setModel(text)}
/>
<TextInput
style={styles.input}
placeholder="Year"
value={year}
onChangeText={text => setYear(text)}
keyboardType="numeric"
/>
<TextInput
style={styles.input}
placeholder="Color"
value={color}
onChangeText={text => setColor(text)}
/>
<TextInput
style={styles.input}
placeholder="License plate"
value={licensePlate}
onChangeText={text => setLicensePlate(text)}
/>
<TouchableOpacity style={styles.button} onPress={handleAddCar}>
<Text style={styles.buttonText}>Add</Text>
</TouchableOpacity>
</Card>
</View>
</ImageBackground>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
alignItems: 'center',
justifyContent: 'center',
},
input: {
width: '100%',
height: 50,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
paddingHorizontal: 10,
marginBottom: 20,
},
button: {
backgroundColor: '#039BE5',
borderRadius: 5,
paddingVertical: 5,
justifyContent: 'center', // center text vertically
},
buttonText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
textAlign: 'center', // center text horizontally
},
card: {
backgroundColor: '#EDEDED',
borderRadius: 10,
padding: 20,
},
backgroundImage: {
flex: 1,
resizeMode: 'cover',
justifyContent: 'center',
backgroundColor: 'black',
},
});

export default AddCarsScreen;