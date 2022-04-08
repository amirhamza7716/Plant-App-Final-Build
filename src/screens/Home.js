import { NavigationContainer } from "@react-navigation/native";
import React,{useState} from "react";

import {View,Text,StyleSheet,Image,FlatList,TouchableOpacity
} from 'react-native';
// import { TouchableOpacity } from "react-native-web";
import {COLORS,icons,images,SIZES} from '../constants/index';

const Home = ({navigation}) =>{
    // const [newPlants,setnewPlants] = useState([
    //     {
    //         id:0,
    //         name:"Plant 1",
    //         img:images.plant1

    //     },
    //     {
    //         id:1,
    //         name:"Plant 1",
    //         img:images.plant2

    //     },
    //     {
    //         id:2,
    //         name:"Plant 1",
    //         img:images.plant3

    //     },
    //     {
    //         id:3,
    //         name:"Plant 1",
    //         img:images.plant4

    //     },
    //     {
    //         id:4,
    //         name:"Plant 1",
    //         img:images.plant5

    //     }
    // ])

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

        }
    ]

    return (
        <View style={styles.container}>
        {/* homa page header start */}
            <View style={styles.header}>
            {/* app logo start */}
                <View style={styles.header_logo}>
                    <View>
                       <Text style={{
                        fontSize:20,
                        color:COLORS.white,
                        // fontWeight:25
                        }}
                        >New Playlist
                        </Text>
                    </View>

                    <View>
                    <Image
                                 source={icons.focus}
                                 resizeMode='contain'
                                 style={{
                                    
                                     width:25,
                                     height:25,
                                 }}
                                />
                    </View>
                   

                </View>
                 {/* app logo end */}

                  {/* app header playlist start*/}

                  <View 
                  style={{height:130,width:"100%"}}
                  >
                       <FlatList
                           style={{
                               height:120,
                            //    width:"100%"
                           }}
                           data={newPlants}
                           keyExtractor={(key)=>{
                                        return key.id;
                                    }}
                           horizontal
                           showsHorizontalScrollIndicator={false}
                           renderItem={(ele,index)=>{
                               return (
                                   <View key={index} style={{justifyContent:"center",alignItems:"center",width:140}}>
                                       <Image
                                           source={ele.item.img}
                                           resizeMode="cover"
                                            style={{
                                                height:"90%",
                                                // width:SIZES.width *0.23,
                                                width:100,
                                                borderRadius:15,
                                            }}
                                       />
                                       
                                       <View  style={{position:"absolute",right:25,bottom:10,backgroundColor:COLORS.primary ,borderRadius:30}}>
                                           <Text style={{color:COLORS.white,padding:5}}>{ele.item.name}</Text>
                                       </View>
                                   </View>
                               )
                           }
                                           
                           
                                
                           }
                       />

                      
                    </View>
            </View>
            {/* home page header end */}
            {/* home page main start */}

            <View style={styles.main}>
{/* main logo portion start */}
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{color:COLORS.black,fontSize:20,}}>Today Share</Text>
                    <TouchableOpacity
                    onPress={()=>{console.log(hello)}}
                    >
                        <Text style={{color:COLORS.black}}>see all</Text>
                    </TouchableOpacity>
                </View>
{/* main logo portion end*/}

{/* main logo portion img portion*/}
                <View style={{display:'flex',flexDirection:"row",marginTop:10,height:"85%"}}>
                    <View style={{flex:1,flexDirection:"column"}}>
                        
                        <View style={{flex:1}}>
                            <TouchableOpacity
                            onPress={()=>{navigation.navigate("PlantDetail")}}
                            >
                                <Image
                                    source={images.plant5}
                                           resizeMode="cover"
                                            style={{
                                                height:"100%",
                                                // width:SIZES.width *0.23,
                                                width:"95%",
                                                borderRadius:15,
                                            }}
                                />
                            </TouchableOpacity>    
                        </View>
                        <View style={{flex:1,marginTop:5}}>
                            <TouchableOpacity
                             onPress={()=>{navigation.navigate("PlantDetail")}}
                            >
                                <Image
                                    source={images.plant7}
                                           resizeMode="cover"
                                            style={{
                                                height:"100%",
                                                width:"95%",
                                                // width:150,
                                                borderRadius:15,
                                            }}
                                />
                            </TouchableOpacity>
                        </View>

                       
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity
                         onPress={()=>{navigation.navigate("PlantDetail")}}
                        >
                            <Image
                                source={images.plant6}
                                           resizeMode="cover"
                                            style={{
                                                height:"100%",
                                                // width:SIZES.width *0.23,
                                                width:"100%",
                                                borderRadius:15,
                                            }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
{/* main  portion end*/}

{/* friend portion start*/}
             <View style={styles.friends}>
               <View style={{margin:10}}>
                   <Text style={{fontSize:20}}>Add Friense</Text>
                   <Text style={{fontSize:15,marginTop:10}}>5 total</Text>
               </View>
               <View style={{flex:1,flexDirection:"row",marginTop:20}}>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
                        <View style={{height:40,justifyContent:"flex-start",alignItems:"center",flexDirection:"row",position:"relative"}}>
                            <Image
                                source={images.profile1}
                                           resizeMode="cover"
                                            style={{
                                                height:40,
                                                // width:SIZES.width *0.23,
                                                width:40,
                                                borderRadius:25,
                                                
                                                

                                            }}
                            />
                            <Image
                                source={images.profile2}
                                           resizeMode="cover"
                                            style={{
                                                height:40,
                                                // width:SIZES.width *0.23,
                                                width:40,
                                                borderRadius:25,
                                                position:"absolute",
                                                left:20
                                            }}
                            />
                            <Image
                                source={images.profile3}
                                           resizeMode="cover"
                                            style={{
                                                height:40,
                                                // width:SIZES.width *0.23,
                                                width:40,
                                                borderRadius:25,
                                                // position:"absolute",
                                                // right:0
                                                // left:55
                                            }}
                            />
                        </View>
                        <View style={{height:40,justifyContent:"center",alignItems:"center"}}>
                            <Text>
                                +2 More
                            </Text>
                        </View>

                    </View>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
                        <TouchableOpacity
                        onPress={()=>{console.log("hel")}}
                        >
                            <View style={{height:40,justifyContent:"center",alignItems:"center"}}>
                                <Text>Add new</Text>
                            </View>
                        </TouchableOpacity>
                       <View style={{backgroundColor:COLORS.gray,borderRadius:5,height:40,width:40,justifyContent:"center",alignItems:"center"}}>
                             <Image
                                source={icons.Plus}
                                           resizeMode="cover"
                                            style={{
                                                height:30,
                                                // width:SIZES.width *0.23,
                                                width:30,
                                                borderRadius:15,
                                            }}
                            />
                       </View>
                        
                    </View>

               </View>

             </View>

{/* friend portion end*/}           


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header:{
     height:"30%",
     borderBottomLeftRadius:40,
     borderBottomRightRadius:40,
     backgroundColor:COLORS.primary,
    },
    header_logo:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        // margin:35,
        padding:35,
    },
    main:{
    //    flex:1,
       flexDirection:"column",
    //   
       height:"40%",
    //    backgroundColor:COLORS.blue,
       margin:10,
    },
    friends:{
        flexDirection:"column",   
        height:"30%",
        backgroundColor:COLORS.lightGray,
        
       

    }
  });

export default Home;