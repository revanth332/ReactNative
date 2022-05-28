import React,{useState} from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style.js';
import CustomInput from '../../custominput';
import CustomButton from '../../custombutton';

const SignUpScreen = ({navigation}) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setConfirmPassword] = useState('');

  const onSignInGoogle =() => {
    window.alert("sign in");
  }
  const onSignInFacebook =() => {
    window.alert("sign in");
  }
  const onSignInApple =() => {
    window.alert("sign in");
  }
  const onSignUpPressed =() => {
    navigation.navigate('SignIn');
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.container}>
     <Text style={styles.title}>Create Account</Text>
     <CustomInput
     placeholder="Name"
     value={name}
     setValue={setName}
     />

     <CustomInput
     placeholder="Email"
     value={email}
     setValue={setEmail}
     />

    <CustomInput
     placeholder="Password"
     value={password}
     setValue={setPassword}
     safe = {true}
     />

    <CustomInput
     placeholder="Confirm Password"
     value={confirmpassword}
     setValue={setConfirmPassword}
     safe={true}
     />

     <CustomButton
     text="Sign Up"
     onPress={onSignUpPressed}
     type="primary"
     />
     
    <Text style={styles.text}>By signing up you are agreeing to our <Text style={styles.subtext} >privacy and policy</Text></Text>

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
     text="Already have an account? Log In"
     onPress={onSignUpPressed}
     type="tertiary"
     />
    </View>
  </ScrollView>
  )
}
export default SignUpScreen;