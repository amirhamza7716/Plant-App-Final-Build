import React from "react";
import {View,Text,Image,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {COLORS,icons,images,SIZES} from '../constants/index';

const Favourites = () =>{
    const newPlants =[
        {
            id:0,
            name:"Plant 1",
            img:images.plant1

        },
        {
            id:1,
            name:"Plant 2",
            img:images.plant2

        },
        {
            id:2,
            name:"Plant 3",
            img:images.plant3

        },
        {
            id:3,
            name:"Plant 4",
            img:images.plant4

        },
        {
            id:4,
            name:"Plant 5",
            img:images.plant5

        },
        {
            id:5,
            name:"Plant 6",
            img:images.plant6

        },
        {
            id:6,
            name:"Plant 7",
            img:images.plant7

        }
    ]
    return (
        <View style={styles.container}>
           <FlatList
                           style={{
                            //    height:200,
                            //    width:"100%"
                           }}
                           data={newPlants}
                           keyExtractor={(key)=>{
                                        return key.id;
                                    }}
                                    vertical
                           showsVerticalScrollIndicator={false}
                        //    showsHorizontalScrollIndicator={false}
                           renderItem={(ele,index)=>{
                               return (
                                   <View key={index} style={{justifyContent:"center",alignItems:"center",width:300,margin:20}}>
                                       <Image
                                           source={ele.item.img}
                                           resizeMode="cover"
                                            style={{
                                                height:400,
                                                // width:SIZES.width *0.23,
                                                width:"100%",
                                                borderRadius:15,
                                            }}
                                       />
                                       
                                       <View  style={{position:"absolute",right:25,bottom:10,backgroundColor:COLORS.primary ,borderRadius:30}}>
                                           <Text style={{color:COLORS.white,padding:5}}>{ele.item.name}</Text>
                                       </View>
                                       <View  style={{position:"absolute",left:25,top:10,borderRadius:30}}>
                                       <Image
                                           source={icons.heartRed}
                                           resizeMode="cover"
                                            style={{
                                                height:40,
                                                // width:SIZES.width *0.23,
                                                width:40,
                                                borderRadius:15,
                                            }}
                                            />
                                       </View>
                                   </View>
                               )
                           }
                                           
                           
                                
                           }
                       />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default  Favourites;