import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import React from 'react';

const HomeScreen = (props) => {
    
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
       
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
            marginBottom: 10
          }}
          onPress={() => props.navigation.navigate('Stagger Opacity')}
          >
          <Text style={{color: 'white'}}>Stagger</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#33E6FF',
            marginBottom: 10
          }}>
          <Text style={{color: 'white'}}>X axis and Y axis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7C00FF',
            marginBottom: 10
          }}>
          <Text style={{color: 'white'}}>Rotation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
