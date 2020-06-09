import React from 'react';
import {Text,Button,TouchableOpacity,View,StyleSheet,Picker,Image} from 'react-native';


class CustomPicker extends React.Component{
    
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
                    <View style={styles.pickerView}>
                        <Picker
                            selectedValue={this.props.value}
                            onValueChange={this.props.onselect}
                            mode='dropdown'
                            style={{color:'#990909'}}
                            itemStyle={{color:'#990909'}}
                        >
                            {this.props.items.map((item,index)=>{
                                return(<Picker.Item key={index} label={item} value={item} />)
                            })}
                            
                        </Picker>
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
    pickerView:{
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

export default CustomPicker;