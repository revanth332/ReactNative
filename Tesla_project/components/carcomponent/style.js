import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  carContainer:{
    width:'100%',
    height:'100%',
  },
  titles:{
    marginTop:'30%',
    width:'100%',
    alignItems:'center',
  },
  title:{
    fontSize:40,
    fontWeight:'bold',
  },
  subtitle:{
    fontSize:16,
    color:'#5c5e62'
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
    position:'absolute',
  },
  buttoncontainer:{
    position:'absolute',
    bottom:0,
    width:'100%',
  },
  subtitleCTA:{
    textDecorationLine:'underline',
  }
});
export default styles;