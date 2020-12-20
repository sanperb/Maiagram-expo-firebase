import React from 'react';
import {
  createStackNavigator,
  NavigationContainer,
} from '@react-navigation/stack';
import { StyleSheet, Image } from 'react-native';
import Colours from '../res/Colours';
import UploadphotoScreen from './UploadphotoScreen';

function LogoTitle() {
  return (
    <Image
      style={{ width: 160, height: 50, marginTop: 5, alignSelf: 'center' }}
      source={require('../../assets/logov4.png')}
    />
  );
}

const Stack = createStackNavigator();

const UploadphotoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colours.dark,
          height: 80,
          borderTopColor: Colours.light,
          borderTopWidth: 20,
        },
      }}
    >
      <Stack.Screen
        name="Upload Photo"
        component={UploadphotoScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    alignContent: 'center',
  },
});

export default UploadphotoStack;
