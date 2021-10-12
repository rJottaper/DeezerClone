import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ title }) => {
  return (
    <View style={styles.viewHeader}>
      <TouchableOpacity style={styles.icon}>
        <Icon name="chevron-left" style={[styles.iconText]} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.viewImage}>
          <Image source={require('../../Assets/favorites.png')} style={styles.image} />
        </View>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <View style={styles.viewButton}>
            <Icon name="random" style={[styles.iconText, { marginTop: 3 }]} />
            <Text style={styles.buttonText}>Random Play</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewHeader: {
    backgroundColor: '#212127',
    width: '100%',
    height: 350,
    justifyContent: 'center',
    marginBottom: 30
  },
  icon: {
    marginTop: 30,
    marginLeft: 15,
  },
  iconText: {
    fontSize: 22,
    color: '#FFF'
  },
  content: {
    alignItems: 'center'
  },  
  viewImage: {
    alignItems: 'center',
    marginTop: 30
  },
  image: {
    width: 150,
    height: 150,
  },
  headerTitle: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DC3444',
    padding: 15,
    marginTop: 40,
    width: '50%',
    borderRadius: 30,
  },  
  viewButton: {
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    marginLeft: 10
  },
})

export default Header;