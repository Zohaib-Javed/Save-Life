import React from 'react';
import {ImageBackground,StyleSheet,View,Image} from 'react-native';
export default class SplashScreen extends React.Component{
    time;
    componentDidMount(){
        this.time=setTimeout(()=>{
            this.props.navigation.replace('Home');
            // this.props.navigation.goBack();

        }
            ,3000);
    }
    componentWillUnmount(){
        if(this.time){
            clearTimeout(this.time);
            // alert('yes');
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.bgImage}
                    source={require('../assets/savelife.png')}>

                </Image>
            </View>
          
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // borderColor:'green',
        // borderWidth:2,
    },
    bgImage:{
        width:'80%',
        height:'80%',
        // borderColor:'blue',
        // borderWidth:2,
    }
});