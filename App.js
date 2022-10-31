import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen, StaggerOpacity} from './screens';
import { enableScreens } from 'react-native-screens';

const Stack = createNativeStackNavigator();


enableScreens();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        // headerShown: false
        // headerStyle: {backgroundColor: 'white'},
        // statusBarStyle: 'auto',
        // headerTitleStyle: {color: 'white'},
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Stagger Opacity' component={StaggerOpacity}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;