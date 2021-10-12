import React, { useEffect, useState } from 'react';
import { SafeAreaView, View,  StyleSheet, ScrollView, ActivityIndicator } from 'react-native';


import Card from '../../Components/Card';
import Header from '../../Components/Header';

import api from '../../Services/api';
import { FlatList } from 'react-native-gesture-handler';

const Playlist = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const init = async () => {
    try {
      const response = await api.get('https://api.deezer.com/playlist/1082925547')
      setData(response.data.tracks.data)
    } catch (error) {
      throw new Error(message)
    }
    setLoading(false);
  }

  useEffect(() => {
    init()
  }, [])
  
  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    )
  } else {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Header title="Public's Favorites" />
          <FlatList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Card id={item.id} title={item.title} subtitle={item.artist.name} image={item.md5_image} album={item.album.id} />}
        />
        </SafeAreaView>
      </ScrollView>
  );
  };
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItens: 'center',
    backgroundColor: '#1B1A1E',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItens: 'center',
    backgroundColor: '#1B1A1E',
  }
});

export default Playlist;