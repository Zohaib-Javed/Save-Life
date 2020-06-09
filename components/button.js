import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

const CustomButton=(props)=>(
    <View>
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    </View>
);

const styles=StyleSheet.create({
    button:{
        textAlign:'center',
        alignItems:'center',
        padding:15,
        marginLeft:50,
        marginRight:50,
        marginTop:10,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'#ff0000',
    },
    text:{
        fontSize:17,
        fontStyle:'italic',
        fontWeight:'bold',
        color:'white',
    }
});

export default CustomButton;