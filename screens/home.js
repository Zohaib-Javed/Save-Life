import React from 'react';
import {StyleSheet,View,Text,ImageBackground,BackHandler} from 'react-native';
import CustomButton from '../components/button'

class Home extends React.Component{
 
  componentWillUnmount() {
    BackHandler.exitApp();
    // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  
  handleBackButtonClick() {
      
  }
  render(){
    return (
      <ImageBackground style={styles.container}
      source={require('../assets/bg1.jpg')}>
          <CustomButton
            title={'Search Doners'}
            onPress={()=>this.props.navigation.navigate("Search")}>
          </CustomButton>
          <CustomButton
            title={'Register Doner'}
            onPress={()=>this.props.navigation.navigate("Register")}>
          </CustomButton>

      </ImageBackground>
    )
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    width:'100%',
    height:'100%',
  },
  custombtn:{
    margin:20,
  }
});

export default Home;