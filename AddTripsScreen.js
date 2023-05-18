import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';
const AddTrips = ({ addTrip }) => {
const navigation = useNavigation(); // get the navigation object

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [departureDate, setDepartureDate] = useState('');
const [arrivalDate, setArrivalDate] = useState('');
const [driverName, setDriverName] = useState('');
const [CarId, setCarId] = useState('');
const handleAddTrip = () => {
if (title.trim() === '' || description.trim() === '' || departureDate.trim() === '' || arrivalDate.trim() === '' || driverName.trim() === ''|| CarId.trim() === '') {
alert('Please fill all fields');
return;
}
addTrip(title, description, departureDate, arrivalDate, driverName, CarId);
setTitle('');
setDescription('');
setDepartureDate('');
setArrivalDate('');
setDriverName('');
setCarId('');
navigation.goBack();  // navigate back to 
};

return (
<ImageBackground source={require('./images/TripsScreenn.jpg')} style={styles.backgroundImage}>
<View style={styles.container}>
<Card containerStyle={styles.card}>
<TextInput
style={styles.input}
placeholder="Title"
value={title}
onChangeText={text => setTitle(text)}
/>
<TextInput
style={styles.input}
placeholder="Description"
value={description}
onChangeText={text => setDescription(text)}
multiline
/>
<TextInput
style={styles.input}
placeholder="Date of departure"
value={departureDate}
onChangeText={text => setDepartureDate(text)}
/>
<TextInput
style={styles.input}
placeholder="Date of arrival"
value={arrivalDate}
onChangeText={text => setArrivalDate(text)}
/>
<TextInput
style={styles.input}
placeholder="Driver name"
value={driverName}
onChangeText={text => setDriverName(text)}
/>
<TextInput
style={styles.input}
placeholder="Car ID"
value={CarId}
onChangeText={text => setCarId(text)}
/>
<TouchableOpacity style={styles.button} onPress={handleAddTrip}>
<Text style={styles.buttonText}>Add </Text>
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
heading: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
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
    justifyContent: 'center', // Ajout de la propriété pour centrer le texte
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Ajout de la propriété pour centrer le texte horizontalement
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

export default AddTrips;