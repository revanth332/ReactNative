import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styles from './style.js';

const CustomInput = ({value,setValue,placeholder,safe}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.input} 
        secureTextEntry={safe}
       />
    </View>
  )
}
export default CustomInput;