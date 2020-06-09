import React from 'react';
import {TextInput,View,StyleSheet,Picker,Image} from 'react-native';


class CustomTextInput extends React.Component{
    
   
    render(){
        return(
            <View>
                <View style={styles.container}>
                    <View style={styles.imageView}>
                        <Image
                            source={this.props.imageName}
                            style={styles.image}
                           >

                        </Image>    
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput
                            placeholder={this.props.placeholder}
                            keyboardType={this.props.keyboardType}
                            placeholderTextColor='#990909'
                            value={this.props.value}
                            onChangeText={this.props.setvalue}
                            style={{color:'#990909'}}
                        >
                        </TextInput>
                    </View>
                   
                </View>
               
            </View>
        );
    }

}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        borderColor:'red',
        borderWidth:1,
        borderRadius:20,
    },
    textInputView:{
        flexGrow:1,
        paddingLeft:10,
        // borderColor:'yellow',
        // borderWidth:1,
    },
    image:{
        height:50,
        width:50,
    },
    imageView:{
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        width:50,
        height:50,
        justifyContent:'center',
        // borderColor:'green',
        // borderWidth:1,
    }
});

export default CustomTextInput;