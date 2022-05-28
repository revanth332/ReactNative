import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image} from 'react-native';
import Constants from 'expo-constants';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
        
      <View style={styles.imagecontainer}>
      <Text style={styles.bartext}>My Profile</Text>
        <Image style={styles.image} source={require('./assets/propic.jpg')} />
        <Text style={styles.imagetext}>Revathipathi</Text>
        <View style={styles.details}>
          <Text style={styles.head}>College :</Text>
          <Text style={styles.desc}>R.V.R & J.C College Of Engineering</Text>
          <Text style={styles.head}>Course :</Text>
          <Text style={styles.desc}>B.Tech</Text>
          <Text style={styles.head}>Branch :</Text>
          <Text style={styles.desc}>Computer Science & Business System</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'white',
    paddingTop: Constants.statusBarHeight,
    //padding: 8,
    fontFamily:'sans-serif',
  },
  imagecontainer:{
    height:'100%',
    width:'100%',
  },
  image:{
    height:120,
    width:120,
    borderRadius:'50%',
    alignSelf:'center',
    marginTop:'30%',
  },
  bartext:{
    backgroundColor:'#1d95db',
    color:'white',
    padding:10,
    fontSize:15,
    fontWeight:'600',
    //textAlign:'center',
  },
  details:{
    margin:5,
    marginTop:'10%',
    
    //width:'100%',
  },
  desc:{
    backgroundColor:'#ebeded',
    padding:10,
    margin:10,
    borderRadius:5,
    color:'#4e5251',
    fontWeight:'500'
  },
  head:{
    fontWeight:'500',
    color:'#393b3a',
  },
  imagetext:{
    marginTop:'2%',
    textAlign:'center',
    fontWeight:'500',
    color:'#393b3a',
  }
});
