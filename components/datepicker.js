import React from 'react';
import {TextInput,Text,View,StyleSheet,Picker,Image,TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class CustomDatePicker extends React.Component{
    
    state={
        show:false,
    }
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
                    <View style={styles.dateTimeView}>
                        <TouchableOpacity
                            onPress={()=> this.props.onPress(true)}>
                            {this.props.show &&(<DateTimePicker
                                    maximumDate={new Date()}
                                    value={this.props.value}
                                    mode="date"
                                    display="default"
                                    onChange={this.props.onchange}
                                    style={{color:'#990909'}}
                                    >
                                    </DateTimePicker>)}
                            <Text style={{color:'#990909'}}>
                                {this.props.showDate}
                            </Text>
                           
                        </TouchableOpacity>
                       
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
    dateTimeView:{
        flexGrow:1,
        paddingLeft:10,
        // borderColor:'yellow',
        // borderWidth:1,
        justifyContent:'center',
    },
    image:{
        height:47,
        width:47,
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

export default CustomDatePicker;