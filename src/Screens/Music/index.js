import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome'

import ProgressBar from '../../Components/ProgressBar'
import Icon from '../../Components/Icon';

const Music = ({ route }) => {
  const { title, subtitle, album } = route.params

  const [isPlaying, setIsPlaying] = useState(false);

  const renderIcon = () => {
    if (isPlaying == false) {
      return (
        <Icons name="play" style={[styles.icon, { color: '#FFF' }]} />
      )
    } else {
      return (
        <Icons name="pause" style={[styles.icon, { color: '#FFF' }]} />
      )
    }
  }

  const ChangeIcon = (isPlaying) => {
    isPlaying == false ? setIsPlaying(true) : setIsPlaying(false)
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.align}>
        <ImageBackground source={{ uri: `https://api.deezer.com/album/${album}/image`}} style={styles.image} />
      </View>
      <ProgressBar />
      <View style={styles.align}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.align}>
        <View style={styles.iconView}>
          <Icon name="backward" onPress={() => console.log()} />
          <TouchableOpacity onPress={() => ChangeIcon(isPlaying)}>
            {renderIcon()}
          </TouchableOpacity>
          <Icon name="forward" onPress={() => console.log()}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#1B1A1E'
  },
  image: {
    width: 300,
    height: 300,
  },
  align: {
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10
  },  
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#868B8E'
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon : {
    fontSize: 28,
  }
});

export default Music;