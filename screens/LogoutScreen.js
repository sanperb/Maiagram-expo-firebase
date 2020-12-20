import React from 'react';
import { StyleSheet, Button } from 'react-native';

import Colors from '../utils/colors';
import SafeView from '../components/SafeView';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';

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
    <SafeView style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.light,
  },
});
