import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import CarItem from './components/carcomponent';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
      name={"Modal S"}
      tagline={"Starting from $49,590" }
      image ={require('./assets/car.jpg')}
      taglineCTA ={"Touchless delivery"}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    //padding: 8,
  },
});
