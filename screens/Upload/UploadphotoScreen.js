import React from 'react';
import { Image, StyleSheet, Button, Text, View, Alert,TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as firebase from 'firebase';

export default class UploadphotoScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri, "Select-image")
        .then(() => {
          Alert.alert("Success");
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  }

  onChooseImageSelect = async () => {
    let result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri, "photo-camera")
        .then(() => {
          Alert.alert("Success");
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  }

  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Button
        title="Choose image..."
        onPress={this.onChooseImagePress}
        
         />
        <Button
        title="Take a Photo..." 
        onPress={this.onChooseImageSelect} />

        <TextInput
          multiline
          style={{ flex: 1, paddingHorizontal: 16 }}
          placeholder="Add a description..."
          onChangeText={text => {
            this.setState({ text });
            this.props.navigation.setParams({ text });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingTop: 50, 
    alignItems: "center", 
  },
  
  
});
