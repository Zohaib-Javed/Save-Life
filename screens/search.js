import React from 'react';
import {StyleSheet,View,Text,ImageBackground,BackHandler} from 'react-native';
import CustomPicker from '../components/picker';
import Cities from '../assets/cities';
import CustomButton from '../components/button';
import BloodGroups from '../assets/bloodgroups';

class SearchDonor extends React.Component{
    state={
        group:'',
        city:'',
    }
    setbloodgroup=(bloodgroup)=>{
        this.setState({group:bloodgroup})
       
    }
    setcity=(city)=>{
        this.setState({city})
    }
    validation=()=>{
        // alert(this.state.city);
        if(this.state.group!='' && this.state.city!='' && this.state.city!='Select City' && this.state.group!='Select Group'){
            this.props.navigation.navigate("ListScreen",this.state);
        }
    }
   
    render(){
        return (
            <ImageBackground style={styles.container}
                source={require('../assets/bg1.jpg')}
            >
            <View style={styles.CustomPicker}>
                <CustomPicker items={BloodGroups}
                    onselect={this.setbloodgroup}
                    value={this.state.group}
                    imageName={require('../assets/blood_type.png')}>
                    
                </CustomPicker>
            </View>
        
            <View style={styles.CustomPicker}>
                <CustomPicker items={Cities}
                    onselect={this.setcity}
                    value={this.state.city}
                    imageName={require('../assets/earthpng.png')}>
                    
                </CustomPicker>
            </View>
            <View style={styles.Custombtn}>
                <CustomButton
                    title='Search'
                    onPress={this.validation}>
                </CustomButton>
            </View>
        
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
  
  CustomPicker:{
      marginTop:10,
      marginLeft:10,
      marginRight:10,
  },
  Custombtn:{
    padding:10,
  },
});

export default SearchDonor;