import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Colours from '/Users/sandra/Maiagram-expo-firebase/screens/res/Colours.js'



const Tab = createBottomTabNavigator();


export default function LogoutScreen() {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (

    <Tab.Navigator>
      <Tab.Screen name="Sign Out" component={handleSignOut} />

      
    </Tab.Navigator>

);
}