import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
  } from 'react-native';
  import React, {useEffect, useRef} from 'react';
  import {useFocusEffect} from '@react-navigation/native';
  
  const StaggerOpacity = () => {
    const first = useRef(new Animated.Value(0)).current;
    const second = useRef(new Animated.Value(0)).current;
    const third = useRef(new Animated.Value(0)).current;
  
    useFocusEffect(
      React.useCallback(() => {
        Animated.stagger(1500,[
          Animated.timing(first, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true
          }),
          Animated.timing(second, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true
          }),
          Animated.timing(third, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true
          })
        ]).start()
      }, []),
    );
  
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'orange',
            marginBottom: 10,
            opacity: first
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'orange',
            marginBottom: 10,
            opacity: second
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'orange',
            opacity: third
          }}
        />
      </SafeAreaView>
    );
  };
  
  export default StaggerOpacity;
  
  const styles = StyleSheet.create({});
  