import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StatusBar, StyleSheet, Text } from 'react-native';

const Progress = ({ step, steps, height }) => {
  const animatedValue = useRef(new Animated.Value(-100)).current
  const reactive = useRef(new Animated.Value(-100)).current
  const [width, setWidth] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [])

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps)
  }, [step, width])

  return (
    <>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }} 
        style={{ height, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: height, overflow: 'hidden' }}
      >
        <Animated.View 
          style={{ 
            height, 
            width: '100%', 
            borderRadius: height, 
            backgroundColor: '#FFF', 
            position: 'absolute', 
            left: 0, 
            top: 0, 
            transform: [
              {
                translateX: animatedValue
              }
            ]    
          }} 
        />
      </View>
    </>
  )
}

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Progress step={4} steps={10} height={5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 40
  }
});

export default ProgressBar;
