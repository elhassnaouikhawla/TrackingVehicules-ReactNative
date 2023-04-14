import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AdminScreen = () => {

  const trips = [
    { id: '1', name: 'Trip 1', image: require('./images/gps.jpg') },
    { id: '2', name: 'Trip 2', image: require('./images/gps.jpg') },
    { id: '3', name: 'Trip 3', image: require('./images/gps.jpg') },
    { id: '4', name: 'Trip 4', image: require('./images/gps.jpg') },
    { id: '5', name: 'Trip 5', image: require('./images/gps.jpg') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require('./images/trackin-car.jpg')}
        />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="person" size={32} color="#000" />
          <Text style={styles.iconText}>Driver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="car" size={32} color="#000" />
          <Text style={styles.iconText}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="bus" size={32} color="#000" />
          <Text style={styles.iconText}>Cars</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={trips}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(128, 128, 128, 0.4)',
  },
  coverPhotoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    backgroundColor: '#FFF',
    overflow: 'hidden'
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.9,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 8,
    marginTop: -20,
    alignSelf: 'center',
    zIndex: 1
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 20,
  },
 
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#F7D154',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default AdminScreen;