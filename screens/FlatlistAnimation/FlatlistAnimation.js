import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FlatlistCard from './Card/FlatlistCard';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

const FlatlistAnimation = () => {
  const y = new Animated.Value(0);
  const [colorArray, setColorArray] = useState([
    {key: 1, color: '#E53935'},
    {key: 2, color: '#5E35B1'},
    {key: 3, color: '#3949AB'},
    {key: 4, color: '#039BE5'},
    {key: 5, color: '#FDD835'},
    {key: 6, color: '#43A047'},
    {key: 7, color: '#D81B60'},
    {key: 8, color: '#5E35B1'},
    {key: 9, color: '#1E88E5'},
    {key: 10, color: '#FB8C00'},
  ]);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });
  console.log('colorArray ====>', colorArray);
  // useEffect(() => {
  //   getColorArray();
  //   return () => {
  //     setColorArray([]);
  //   };
  // }, []);

  // const getColorArray = () => {
  //   var array = [];
  //   for (let index = 0; index < 10; index++) {
  //       var obj = {};
  //       obj['key'] = index;
  //       obj['color'] = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  //     array.push(obj);
  //   }
  //   setColorArray(array);
  // };

  const renderItem = ({index, item: {color}}) => {
    return(
    <FlatlistCard {...{ index, y, color}}/>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <AnimatedFlatlist
        scrollEventThrottle={16}
        bounces={false}
        data={colorArray}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        {...{onScroll}}
      />
    </SafeAreaView>
  );
};

export default FlatlistAnimation;

const styles = StyleSheet.create({});
