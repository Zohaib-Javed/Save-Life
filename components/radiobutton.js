import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';


const CustomRadio=(props)=>(
    <View>
        <TouchableOpacity
            style={styles.button}
            onPress={()=>props.onpress(props.title)}
        >
            <Image
                style={styles.image}
                source={props.source}
            >

            </Image>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    </View>
);

const styles=StyleSheet.create({
    button:{
        flexDirection:'row',
        textAlign:'center',
        alignItems:'center',
        
    },
    text:{
        fontSize:17,
        fontStyle:'italic',
        fontWeight:'bold',
        color:'#990909',
    },
    image:{
        height:30,
        width:30,
    }
});

export default CustomRadio;