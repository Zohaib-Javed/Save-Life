import 'react-native-gesture-handler';
import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/home'
import Register from './screens/register';
import Search from './screens/search';
import ListScreen from './screens/listscreen';
import Splash from './screens/splash';

const Main=createStackNavigator({
  Home,
  Register,
  Search,
  ListScreen,
  Splash,
},
{
  initialRouteName:'Splash',
  defaultNavigationOptions:{
    header:null,
  }
});



export default createAppContainer(Main);
