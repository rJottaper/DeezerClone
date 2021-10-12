import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import CardFavorites from '../../Components/CardFavorites';
import Header from '../../Components/Header';

const Favorites = ({ route }) => {
  const [newFavorite, setNewFavorite] = useState([]);

  useEffect(() => {
    const { id, title, subtitle, album } = route.params
    setNewFavorite(oldData => [ ...oldData, { id, title, subtitle, album } ])
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favorites" />
      <FlatList
        data={newFavorite}  
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CardFavorites id={item.id} title={item.title} subtitle={item.subtitle} album={item.album} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItens: 'center',
    backgroundColor: '#1B1A1E',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 20
  }
});

export default Favorites;