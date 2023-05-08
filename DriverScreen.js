import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DriverScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      
        <View style={styles.searchBarContainer}>
          <TextInput style={styles.searchBar} placeholder="Recherche" />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconItem}>
            <Icon name="person-circle-outline" size={24} color="#000" />
            <Text style={styles.iconText}>Driver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Icon name="car-outline" size={24} color="#000" />
            <Text style={styles.iconText}>Trips</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Icon name="boat-outline" size={24} color="#000" />
            <Text style={styles.iconText}>Shipping</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sidebar}>
        <TouchableOpacity style={styles.sidebarItem}>
          <Icon name="home-outline" size={24} color="#000" />
          <Text style={styles.sidebarItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <Icon name="search-outline" size={24} color="#000" />
          <Text style={styles.sidebarItemText}>Recherche avancée</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <Icon name="people-outline" size={24} color="#000" />
          <Text style={styles.sidebarItemText}>À propos de nous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <Icon name="log-in-outline" size={24} color="#000" />
          <Text style={styles.sidebarItemText}>Connexion/Recherche</Text>
        </TouchableOpacity>
      </View>
      {/* Ajoutez ici les composants pour le contenu de la page */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 16,
  },
  coverPhotoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  coverPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 8,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#000',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  sidebarItemText: {
    marginLeft: 16,
    fontSize: 16,
  },
});

export default DriverScreen;
