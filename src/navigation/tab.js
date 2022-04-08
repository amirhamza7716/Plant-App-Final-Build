import React from 'react';

import {View,Text,Image,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {COLORS,icons} from '../constants/index';
import {Home,Favourites,Camra,Box,Search} from '../screens/index'

const Tab = createBottomTabNavigator();
const tabOptions = {
    showLabel:false,
    style:{
        height:"10%"
    }
}
const TABS = ()=>{
 return (
    <Tab.Navigator
      tabOptions={tabOptions}
      
        screenOptions={({route})=>({
          tabBarIcon:({focused})=>{
              const tintColor = focused ? COLORS.primary : COLORS.gray;

              switch(route.name){
                case "Home":
                      return (
                             <Image
                                 source={icons.flash}
                                 resizeMode='contain'
                                 style={{
                                     tintColor:tintColor,
                                     width:25,
                                     height:25,
                                 }}
                             />
                )
                case "Box":
                      return (
                        <Image
                                 source={icons.cube}
                                 resizeMode='contain'
                                 style={{
                                     tintColor:tintColor,
                                     width:25,
                                     height:25,
                                 }}
                             />
                )
                case "Camera":
                      return (
                            <View
                            style={{
                                alignItems:'center',
                                justifyContent:'center',
                                width:40,
                                height:40,
                                borderRadius:25,
                                backgroundColor:COLORS.primary,
                            }}
                            >
                                <Image
                                 source={icons.camra}
                                 resizeMode='contain'
                                 style={{
                                    //  tintColor:tintColor,
                                     width:23,
                                     height:23,
                                 }}
                                />
                            </View>
                )
                case "Search":
                      return (
                                <Image
                                 source={icons.search}
                                 resizeMode='contain'
                                 style={{
                                     tintColor:tintColor,
                                     width:25,
                                     height:25,
                                 }}
                                />
                )
                case "Favourite":
                      return (
                                <Image
                                 source={icons.heart}
                                 resizeMode='contain'
                                 style={{
                                     tintColor:tintColor,
                                     width:25,
                                     height:25,
                                 }}
                                />
                )
                      
              }
          }
      })}
    >


    <Tab.Screen
        name="Home"
        options={{headerShown:false}}
        component={Home}
    />
    <Tab.Screen
        name="Box"
        options={{headerShown:false}}
        component={Box}
    />
    <Tab.Screen
        name="Camera"
        options={{headerShown:false}}
        component={Camra}
    />
    <Tab.Screen
        name="Search"
        options={{headerShown:false}}
        component={Search}
    />
    <Tab.Screen
        name="Favourite"
        options={{headerShown:false}}
        component={Favourites}
    />
   
    </Tab.Navigator>
 )
}

const styles = StyleSheet.create({
    routimg: {
     
    },
  });
  
export default TABS;