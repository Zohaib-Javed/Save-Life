import React from 'react';
import {View,ImageBackground,Text,StyleSheet,TouchableOpacity,Image,Linking} from 'react-native';


const Info=(props)=>(
    <View style={styles.container}>
        <View style={styles.imageView}>
            <ImageBackground source={require('../assets/drop.png')}
                style={styles.image}>
                <Text style={[styles.dropfont,{paddingTop:20,}]}>
                    {props.data.group}
                </Text>
                <Text style={styles.dropfont}>
                    {props.data.age}
                </Text>
            </ImageBackground>
        </View>
        <View style={styles.personalView}>
            <Text style={styles.text}>
                {props.data.name}
            </Text>
            <Text style={styles.text}>
                {props.data.phone}
            </Text>
            <Text style={styles.text}>
                {props.data.city}
            </Text>
            <Text style={styles.text}>
                {props.data.gender}
            </Text>

        </View>
        <View style={styles.callingView}>
            <TouchableOpacity
                onPress={()=>Linking.openURL(`tel:${props.data.phone}`)}>
                <Image source={require('../assets/phoneIcon.png')}
                    style={styles.imageCall}>

                </Image>
                <Text style={[styles.text,{marginLeft:10,marginRight:10,alignSelf:'center'}]}>
                    Call Now
                </Text>
            </TouchableOpacity>
            
        </View>
    </View>
);

const styles=StyleSheet.create({
    container:{
        minHeight:100,
        flexDirection:'row',
        borderBottomColor:'red',
        borderBottomWidth:1,
        borderRadius:20,
    },
    personalView:{
        flexDirection:'column',
        flexGrow:1,
        paddingLeft:20,
        // borderColor:'yellow',
        // borderWidth:1,
        justifyContent: 'center',
    },
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width:80,
        height:100,
        alignItems:'center',
        justifyContent:'center',
        
    },
    imageView:{
        // height:50,
        // width:50,
        // borderColor:'brown',
        // borderWidth:1,
    },
    text:{
        fontSize:15,
        color:'#990909'
    },
    dropfont:{
        paddingTop:10,
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    },
    callingView:{
        justifyContent:'center',
        // borderColor:'brown',
        // borderWidth:1,
    },
    imageCall:{
        alignSelf:'center',
        height:50,
        width:50,
        // borderColor:'blue',
        // borderWidth:1,
    },
});

export default Info;