import React,{useState} from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import CustomInput from '../../custominput';
import CustomButton from '../../custombutton';

const ResetPasswordScreen = ({navigation}) => {
  const [otp,setotp] = useState('');
  const [password,setPassword] = useState('');

  const onResetPasswordPressed = () =>{
    navigation.navigate("SignIn");
  }
  return (
    <View style={styles.container}>
    <Text style={styles.title} >Reset Your Password</Text>
    <CustomInput
     placeholder="Enter OTP"
     value={otp}
     setValue={setotp}
     />
     <CustomInput
     placeholder="Password"
     value={password}
     setValue={setPassword}
     safe = {true}
     />
    <CustomButton
     text="Reset Password"
     onPress={onResetPasswordPressed}
     type="primary"
     />
     </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  title:{
    marginVertical:20,
    fontWeight:'700',
    fontSize:25,
    color:'#395d96',
  }
})

export default ResetPasswordScreen;