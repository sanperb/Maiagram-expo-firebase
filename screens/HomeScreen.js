import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Colours from '/Users/sandra/Maiagram-expo-firebase/screens/res/Colours.js'
import PrincipalStack from './Principal/PrincipalStack'
import UploadphotoStack from './Upload/UploadphotoStack'
import LoginScreen from './LoginScreen'
import LogoutScreen from './LogoutScreen'
import Gallerytest from './Gallerytest'


const Tab = createBottomTabNavigator();


export default function HomeScreen() {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen name="Gallery" component={Gallerytest} />
      <Tab.Screen name="Upload Photo" component={UploadphotoStack} />
      <Tab.Screen name="User" component={LoginScreen} />
      <Tab.Screen name="Sign Out" component={LogoutScreen} />


      
    </Tab.Navigator>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  }
});
