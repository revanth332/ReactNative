import React from 'react';
import {Text,View, ImageBackground } from 'react-native';
import styles from './style.js';
import ButtonItem from '../../components/buttonitem';

const CarItem = (props) => {
  const {name, tagline ,modal, image, taglineCTA} = props;

  return (
      <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image}/>
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
          {tagline}
          {' '}
            <Text style={styles.subtitleCTA}>
            {taglineCTA}
            </Text>
          </Text>
        </View>
        <View style={styles.buttoncontainer}>
        <ButtonItem 
        title="Custom Order" 
        type="primary"
        onPress = {() => {
          window.alert("hello")
        }} 
          />
        <ButtonItem 
        title="Existing Inventory" 
        type="secondary"  
        onPress = {() => {
          window.alert("hello")
        }}  
        />
      </View>
      </View>
  );
};
export default CarItem;