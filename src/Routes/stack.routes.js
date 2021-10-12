import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Playlist from '../Screens/Playlist';
import Music from '../Screens/Music';
import Favorites from '../Screens/Favorites';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator headerMode="none" >
      <Screen name="Playlist" component={Playlist} />
      <Screen name="Music" component={Music} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
};

export default AppRoutes;