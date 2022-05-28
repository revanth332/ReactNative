import React,{useState} from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import CustomInput from '../../custominput';
import CustomButton from '../../custombutton';

const ForgotPasswordScreen = ({navigation}) => {
  const [email,setEmail] = useState('');
  const onSendOTPPressed = () =>{
    navigation.navigate("ResetPassword");
  }
  const onBackToSignInPressed = () =>{
    navigation.navigate("SignIn");
  }
  return (
    <View style={styles.container}>
    <Text style={styles.title} >Confirm your email</Text>
    <CustomInput
     placeholder="Email"
     value={email}
     setValue={setEmail}
     />
    <CustomButton
     text="Send OTP"
     onPress={onSendOTPPressed}
     type="primary"
     />
     <CustomButton
     text="Back to Sign In"
     onPress={onBackToSignInPressed}
     type="tertiary"
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

export default ForgotPasswordScreen;