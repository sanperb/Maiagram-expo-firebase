import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../utils/colors'
import {StyleSheet, Image} from 'react-native';

import HomeScreen from '../screens/HomeScreen';


function LogoTitle() {
  return (
    <Image
      style={{ width: 160, height: 50, marginTop: 5,alignSelf: 'center'}}
      source={require('../assets/logov4.png')}
    />
  );
}

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor: Colors.dark,
        height: 80,
        borderTopColor: Colors.light,
        borderTopWidth: 20,
      }
    }}
    >
      <Stack.Screen 
      name="Maiagram" 
      component={HomeScreen} 
      options={{ headerTitle: props => <LogoTitle  {...props} />}}

      />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.lightest
  },
  
  
});