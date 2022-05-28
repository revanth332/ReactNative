import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import styles from './style';

const ButtonItem = (props) => {
  // const type = props.type;
  // const title = props.title;
  // const onPress = props.onPress;

  const {type , title , onPress } = props;

  const bgcolor = type === "primary" ? 'black':'white';
  const textcolor = type === "primary" ? 'white':'black';
  
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button,{backgroundColor:bgcolor}]}
        onPress={() => onPress()}
      >
      <Text style={[styles.text,{color:textcolor}]}>{title}</Text>
      </Pressable>
    </View>
  );
}
export default ButtonItem;