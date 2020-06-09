import React from 'react';
import {StyleSheet,View,Text,ActivityIndicator,FlatList,ImageBackground} from 'react-native';
import InfoList from '../components/infolist';
import firestore from '@react-native-firebase/firestore';
const usersCollection = firestore().collection('Users');

class ListScreen extends React.Component{
  state={
    group:'',
    city:'',
    param:true,
    // name:'',
    // phone:'',
    // dob:'',
    // gender:'',
    loading:true,
    data:[],
    found:'',
  }
  setbloodgroup=(bloodgroup)=>{
      this.setState({bloodgroup})
  }
  setcity=(city)=>{
      this.setState({city})
      alert(this.state.city)
  }
  getparams= async()=>{
    
    const {navigation}=this.props;
    await this.setState({group:navigation.getParam('group','abc'), city:navigation.getParam('city',''),param:false});
    // alert(this.state.group+"/"+this.state.city)
    this.getData();
    // this.setbloodgroup(JSON.stringify(navigation.getParam('group','')))
    // this.setcity(JSON.stringify(navigation.getParam('city','')))
    // this.setState({param:false})
  }
  getData=async ()=>{
    // alert(this.state.group)
    const alldocs=await usersCollection.get();
    const data=alldocs.docs.map(doc=>doc.data());
    const filteredData=data.filter((oneData)=>oneData.city==this.state.city && oneData.group==this.state.group)
    if(filteredData.length>0){
      this.setState({data:filteredData,loading:false});

    }
    else{
      this.setState({data:filteredData,loading:false,found:'SORRY, No Record Found For This Search'});
    }
    
    
  }
  render(){
    {this.state.param && this.getparams()} 
    
    return (
      <ImageBackground style={styles.container}
      source={require('../assets/bg1.jpg')}>
        <ActivityIndicator style={styles.activity}
        color='#990909'
        size='large'
        animating={this.state.loading}>

        </ActivityIndicator>
        <View style={styles.heading}>
            <Text style={styles.headingText}>
              {this.state.city}
            </Text>
            <Text style={styles.headingText}>
              {this.state.group}
            </Text>
        </View>
        <FlatList
        data={this.state.data}
        renderItem={(obj,key)=>{
          return(
            <InfoList key={key}
              data={obj.item}>

            </InfoList>
          ) 
        }}
        keyExtractor={(item, index) => index.toString()}
        >
        </FlatList>
        {/* {this.state.data.map((obj,key)=>{
          return(
            <InfoList key={key}
              data={obj}>

            </InfoList>
          ) 
        })} */}
       
        {
          !this.state.loading && 
          <View style={styles.foundView}>
            <Text style={styles.found}>
              {this.state.found}
            </Text>
          </View>
         
        }
        

      </ImageBackground>
    )
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    width:'100%',
  },
  activity:{
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
  },
  foundView:{
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    
  },
  found:{
    fontSize:15,
    fontWeight:'bold',
  },
  heading:{
    backgroundColor:'#990909',
    alignItems:'center',
    padding:5,
  },
  headingText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
  }
});

export default ListScreen;