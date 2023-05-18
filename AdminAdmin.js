import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AdminDetail from './AdminDetail';

const AdminAdmin = ({ navigation }) => {
  const [admins, setAdmins] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      role: 'Admin',
    },
  ]);

  const onUpdateAdmin = (admin) => {
    navigation.navigate('UpdateAdminScreen', { admin, onUpdateAdmin });
  };

  const onDeleteAdmin = (id) => {
    Alert.alert(
      'Delete Admin',
      'Are you sure you want to delete this admin?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteAdmin(id) },
      ],
      { cancelable: true }
    );
  };

  const deleteAdmin = (id) => {
    setAdmins(admins.filter(admin => admin.id !== id));
  };

  const handleShowAddAdmin = () => {
    setShowAddAdmin(true);
  };

  const handleAddAdmin = (newAdmin) => {
    setAdmins([...admins, newAdmin]);
  };
  
  const onShowAdminDetail = (admin) => {
    navigation.navigate('AdminDetail', { admin });
  };

  const renderAdmin = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.adminContainer}>
          <Text style={styles.adminName}>{item.firstName} {item.lastName}</Text>
          <View style={styles.adminButtonsContainer}>
            <TouchableOpacity style={styles.updateButton} onPress={() => onUpdateAdmin(item)}>
              <MaterialIcons name="edit" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => onDeleteAdmin(item.id)}>
              <MaterialIcons name="delete" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailButton} onPress={() => onShowAdminDetail(item)}>
              <MaterialIcons name="details" size={19} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground source={require('./images/AdminScreenn.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddAdminScreen', { handleAddAdmin })}>
          <Text style={[styles.addButtonText, { fontWeight: 'bold' }]}>Add an Admin</Text>
        </TouchableOpacity>
        <FlatList
          data={admins}
          renderItem={renderAdmin}
          keyExtractor={(item) => item.id.toString()}
          style={[styles.flatList, { marginTop: 30 }]}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  adminButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  detailButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
    updateButton: {
      backgroundColor: '#0080FF',
      padding: 10,
      borderRadius: 5,
      marginRight: 5,
    },
    deleteButton: {
      backgroundColor: '#FF0000',
      padding: 10,
      borderRadius: 5,
      marginRight: 5,
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addButton: {
      backgroundColor: '#0080FF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      alignSelf: 'flex-end',
      marginRight: 2,
      marginTop: 20,
    },
    addButtonText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    adminContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      padding: 10,
      borderRadius: 5,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    adminName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    flatList: {
      marginTop: 20,
      paddingBottom: 40,
    },
  });
  export default AdminAdmin;