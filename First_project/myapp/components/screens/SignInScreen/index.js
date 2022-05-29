import React,{useState} from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style.js';
import CustomInput from '../../custominput';
import CustomButton from '../../custombutton';

const SignInScreen = ({navigation}) => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const onSignInPressed =() => {
    window.alert("Sign in");
  }
  const onForgotPressed =() => {
    navigation.navigate('ForgotPassword');
  }
  const onSignInGoogle =() => {
    window.alert("sign in");
  }
  const onSignInFacebook =() => {
    window.alert("sign in");
  }
  const onSignInApple =() => {
    console.warn("sign in");
  }
  const onSignUpPressed =() => {
    navigation.navigate('SignUp');
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.container}>
     <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
     
     <CustomInput
     placeholder="Username"
     value={username}
     setValue={setUsername}
     />

     <CustomInput
     placeholder="Password"
     value={password}
     setValue={setPassword}
     safe={true}
     />

     <CustomButton
     text="Sign In"
     onPress={onSignInPressed}
     type="primary"
     />
     <CustomButton
     text="Forgot Password"
     onPress={onForgotPressed}
     type="tertiary"
     />
     <CustomButton
     text="Sign In with Facebook"
     onPress={onSignInFacebook}
     bgColor="#E7EAF4"
     fgColor="#4765A9"
     />
     <CustomButton
     text="sign In with Google"
     onPress={onSignInGoogle}
     bgColor="#FAE9EA"
     fgColor="#DD4D44"
     />
     <CustomButton
     text="sign In with Apple"
     onPress={onSignInApple}
     bgColor="#e3e3e3"
     fgColor="#363636"
     />
     <CustomButton
     text="Don't have an acount? Create one"
     onPress={onSignUpPressed}
     type="tertiary"
     />
    </View>
  </ScrollView>
  )
}
export default SignInScreen;