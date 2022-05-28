import React from 'react';
import { View, Text, Image, TextInput,StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress,text,type,bgColor,fgColor}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container,styles['container_'+type],
      bgColor ? {backgroundColor:bgColor} : {} ]}>
      <Text style={[styles.text,styles['text_'+type],
        fgColor ? {color:fgColor} : {}]}>
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    padding:10,
    marginVertical:5,
    alignItems:'center',
    borderRadius:5,
  },
  container_primary:{
    backgroundColor:'#3B71F3',

  },
  text:{
    fontWeight:'bold',
    color:'white',
  },
  text_tertiary:{
    fontWeight:'400',
    color:'black',
    textDecorationLine:'underline',
  }
})

export default CustomButton;