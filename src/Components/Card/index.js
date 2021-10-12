import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'

const Card = ({ id, title, subtitle, album }) => {
  const navigation = useNavigation();

  const [isPlaying, setIsPlaying] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const renderIcon = () => {
    if (isPlaying == false) {
      return (
        <Icon name="play" style={[styles.icon, { color: '#FFF' }]} />
      );
    } else {
      return (
        <Icon name="pause" style={[styles.icon, { color: '#FFF' }]} />
      );
    };
  };

  const ChangeIcon = (isPlaying) => {
    isPlaying == false ? setIsPlaying(true) : setIsPlaying(false)
  };

  const addColor = () => {
    if (favorite == false) {
      return { color: '#FFF' }
    } else {
      return { color: '#ac3564' }
    }
  };

  const isFavorite = () => {
    favorite == false ? setFavorite(true) : setFavorite(false)
    navigation.navigate('Favorites', {
      id: id,
      title: title,
      subtitle: subtitle,
      album: album,
      addColor: addColor()
    })
  };

  const sendItems = () => {
    navigation.navigate('Music', {
      title: title,
      subtitle: subtitle,
      album: album
    })
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonView} onPress={sendItems}>
        <Image source={{ uri: `https://api.deezer.com/album/${album}/image`}} style={styles.image} />
       <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
       </View>
      </TouchableOpacity>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={() => ChangeIcon(isPlaying)}>
          {renderIcon()}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => isFavorite(favorite)}>
          <Icon name="heart" style={[styles.icon, addColor()]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1B1A1E',
    justifyContent: "space-between",
    padding: 5,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: '#868B8E'
  },
  buttonView: {
    flexDirection: 'row',
    width: '75%'
  },
  image: {
    width: 65,
    height: 50,
    margin: 10
  },
  title: {
    color: '#FFF',
    marginHorizontal: 10,
    marginTop: 15
  },
  subtitle: {
    color: '#868B8E',
    marginLeft: 10
  },
  icon: {
    fontSize: 22,
    marginVertical: 24,
    marginRight: 20
  },
  iconView: {
    flexDirection: 'row',
  }
});

export default Card;