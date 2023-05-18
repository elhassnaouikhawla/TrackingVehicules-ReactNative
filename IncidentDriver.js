import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const IncidentDriver = () => {
  const [incidentInfo, setIncidentInfo] = useState({
    tripId: '',
    incidentDetails: '',
  });

  const handleInputChange = (key, value) => {
    setIncidentInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    // Vous pouvez ajouter ici la logique de traitement de l'incident, par exemple, l'enregistrement dans une base de données.

    // Réinitialisez les champs du formulaire
    setIncidentInfo({
      tripId: '',
      incidentDetails: '',
    });
  };

  return (
    <ImageBackground source={require('./images/incident.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Incident Report</Text>
          <TextInput
            style={styles.input}
            placeholder="Trip ID"
            value={incidentInfo.tripId}
            onChangeText={(text) => handleInputChange('tripId', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Incident Details"
            multiline
            numberOfLines={4}
            value={incidentInfo.incidentDetails}
            onChangeText={(text) => handleInputChange('incidentDetails', text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 5,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#0080FF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IncidentDriver;