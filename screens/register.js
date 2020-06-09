import React from 'react';
import {StyleSheet,View,Text,TextInput,ImageBackground ,ScrollView,KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import CustomPicker from '../components/picker';
import CustomTextInput from '../components/textInput';
import CustomDatePicker from '../components/datepicker';
import Cities from '../assets/cities';
import CustomRadio from '../components/radiobutton';
import CustomButton from '../components/button';
import firestore from '@react-native-firebase/firestore';
import BloodGroups from '../assets/bloodgroups';
const usersCollection = firestore().collection('Users');

class RegisterDetails extends React.Component{
  state={
    name:'',
    phone:'',
    bloodgroup:'',
    city:'',
    date:new Date(),
    datestring:'Select DOB',
    show:false,
    gender:'',
    age:-1,
    loading:false,
  }
  calculate_age = (birthDate) => {
    var today = new Date();
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
      age_now--;
    }
    return age_now;
  }
  setbloodgroup=(bloodgroup)=>{
    this.setState({bloodgroup})
  }
  setcity=(city)=>{
    this.setState({city})
  }
  setname=(name)=>{
    if(name.length<=20 && /^(?:[A-Za-z\s]*)$/.test(name)){ 
      this.setState({name});
    }
  }
  convertDate=(date)=>{
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();
  
    return [date.getFullYear(),(mm>9 ? '' : '0') + mm,(dd>9 ? '' : '0') + dd].join('/');

  }
  register= async ()=>{
    this.setState({loading:true});
    
    if(this.state.name==''){
      alert('Enter Your Name');
    }
    else if(this.state.phone==''){
      alert('Enter Your Phone');
    }
    else if(this.state.phone.length!=11){
      alert('Enter 11 Digit Phone No');
    }
    else if(this.state.bloodgroup=='' || this.state.bloodgroup=='Select Group'){
      alert('Select Your Blood Group');
    }
    else if(this.state.city=='' ||this.state.city=='Select City' ){
      alert('Select Your City');
    }
    else if(this.state.age==-1){
      alert('Select Your DOB');
    }
    else if(this.state.age<=15){
      alert('You are below 16 yrs');
    }
    else if(this.state.gender==''){
      alert('Select Your Gender');
    }
    else{
      const data={
        name:this.state.name,
        phone:this.state.phone,
        city:this.state.city,
        group:this.state.bloodgroup,
        dob:this.state.datestring,
        gender:this.state.gender,
        age:this.state.age,
      }
      await usersCollection.add(data);
      this.setState({loading:false});
      alert('You are Registered');
    }
    this.setState({loading:false});
  }
  setgender=(gender)=>{
    this.setState({gender});
  }
  setphone=(phone)=>{
    if(phone.length<=11 && /^(?:[0][0-9]*)$/.test(phone)) this.setState({phone});
  }
  setDate=(event, selectedDate)=>{
    if(selectedDate){
      const strDate=this.convertDate(selectedDate);
      this.setState({date:selectedDate,datestring:strDate,show:false});
      const age=this.calculate_age(selectedDate);
      this.setState({age});
    }
    else{
      this.setState({show:false});
    }
   
  }
  setShowdatepicker=(show)=>{
    this.setState({show})
  }
  render(){
    return (
      <ImageBackground style={styles.container}
        source={require('../assets/bg1.jpg')}>
        <ActivityIndicator style={styles.activity}
          color='#990909'
          size='large'
          animating={this.state.loading}>

        </ActivityIndicator>
        <View style={styles.CustomPicker}>
          <CustomTextInput
              placeholder='Enter Name'
              keyboardType='default'
              value={this.state.name}
              setvalue={this.setname}
              imageName={require('../assets/profilelogo.png')}>
               
          </CustomTextInput>
        </View>
        <View style={styles.CustomPicker}>
          <CustomTextInput
              placeholder='Enter Phone No'
              keyboardType='numeric'
              value={this.state.phone}
              setvalue={this.setphone}
              imageName={require('../assets/phonelogo.png')}>
              
          </CustomTextInput>
        </View>

        <View style={styles.CustomPicker}>
          <CustomDatePicker
              value={this.state.date}
              onchange={this.setDate}
              show={this.state.show}
              onPress={this.setShowdatepicker}
              showDate={this.state.datestring}
              imageName={require('../assets/cal2.png')}>
              
          </CustomDatePicker>
        </View>

        <View style={styles.CustomPicker}>
          <CustomPicker items={BloodGroups}
              onselect={this.setbloodgroup}
              value={this.state.bloodgroup}
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

        <View style={styles.gender}>
          <View style={styles.customradio}>
            <CustomRadio
              source={this.state.gender=='Male'?require('../assets/checked.png'):require('../assets/uncheck.png')}
              onpress={this.setgender}
              title='Male'>
            </CustomRadio>
          </View>
          <View style={styles.customradio}>
            <CustomRadio
              source={this.state.gender=='Female'?require('../assets/checked.png'):require('../assets/uncheck.png')}
              onpress={this.setgender}
              title='Female'>
            </CustomRadio>
          </View>
          
        </View>

        <View style={styles.registerbtnContainer}>
          <View style={styles.registerbtn}>
            <CustomButton
                title={'Register'}
                onPress={this.register}>
            </CustomButton>
          </View>
          
        </View>
      </ImageBackground>
    )
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    height:'100%',
    width:'100%',
  },
  CustomPicker:{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
  gender:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
  customradio:{
    marginLeft:10,
    marginRight:10,
  },
  registerbtnContainer:{
    width:'100%',
    // borderColor:'red',
    // borderWidth:2,
  },
  registerbtn:{
    
  },
  activity:{
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
  },
});

export default RegisterDetails;