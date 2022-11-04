import { StyleSheet, Text, View, Dimensions, Animated } from "react-native"

import React from 'react';

const {width, height} = Dimensions.get('screen');


const FlatlistCard = ({index, y, color}) => {
    const translateY = Animated.add(y, 
        y.interpolate({
            inputRange: [0, 0.00001 + index * 180],
            outputRange: [0, -index * 180],
            extrapolateRight: 'clamp',
        }));
  return (
    <Animated.View style={[styles.container, {backgroundColor: color, transform: [{translateY}]}]} key={index}>
        <Text style={styles.text}>{index + 1 }</Text>
    </Animated.View>
  )
}

export default FlatlistCard;

const styles = StyleSheet.create({
    container: {
        width: width - 30,
        height: height / 4.5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
})