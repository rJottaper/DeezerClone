import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const Icon = ({ name, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icons name={name} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: '#FFF',
    marginHorizontal: 20
  }
});

export default Icon;