import React from "react";

import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {images,icons,COLORS} from '../constants/index';


const PlantDetail = ({navigation}) =>{

function HorizantalBar({icon,percentage}){
    return (
<View style={{alignItems:"center",height:60}}>
                   <View style={
                       {
                           width:50,height:50,alignItems:"center",justifyContent:"center",borderRadius:10,borderWidth:1,borderColor:COLORS.gray
                       }
                   }>
                       <Image
                           source={icon}
                           resizeMode="cover"
                           style={{
                               tintColor:COLORS.secondary,
                               width:30,
                               height:30
                           }}
                       />
                   </View>
                   
                   <View
                   style={{position:"absolute",bottom:0,left:0,width:"100%",height:3,marginTop:8,backgroundColor:COLORS.gray}}
                   >
                   </View>
                   <View
                   style={{position:"absolute",bottom:0,left:0,width:percentage,height:3,marginTop:8,backgroundColor:COLORS.primary}}
                   >
                   </View>
               </View>
    )
}


function VerticalBar({icon,label,temp}){
    return (
        <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row",marginTop:20}}>
           <View style={{display:"flex",flexDirection:"row",paddingHorizontal:10,justifyContent:"center",alignItems:"center"}}>
               <Image
                   source={icon}
                   resizeMode="cover"
                   style={{
                       width:30,
                       height:30,
                       borderRadius:25
                   }}
               />
               <Text style={{marginLeft:20,fontSize:15,letterSpacing:2}}>{label}</Text> 
           </View>
           <View style={{paddingHorizontal:10,justifyContent:"center",alignItems:"center"}}>
             <Text  style={{marginLeft:20,fontSize:15,letterSpacing:2}}>{temp}</Text>
           </View>
        </View>
    )
}


    return (
        <View style={styles.container}>
        {/* header start */}
            <View style={styles.headerDetail}>
             <Image
                 source={images.bannerBg}
                 resizeMode="cover"
                 style={{
                     width:"100%",
                     height:"100%"
                 }}
             />

             <View style={{flexDirection:"row",justifyContent:"space-between",position:"absolute",top:40,width:"100%"}}>
                <TouchableOpacity
                onPress={()=>{navigation.navigate("Home")}}
                >
                    <View 
                        style={{backgroundColor:COLORS.gray,height:40,width:40,borderRadius:10,justifyContent:"center",alignItems:"center",marginLeft:20}} >
                        <Image
                            source={icons.back}
                            resizeMode="cover"
                            style={{
                                width:25,
                                height:25,
                               
                            }}
                        />
                    </View>
                </TouchableOpacity>
                 <View style={{marginRight:20,justifyContent:"center",alignItems:"center",height:40,width:40,borderRadius:10,}}>
                     <Image
                            source={icons.focus}
                            resizeMode="cover"
                            style={{
                                width:25,
                                height:25,
                               
                            }}
                     />
                 </View>
             </View>

            </View>

        {/* header end */}

        {/* main start */}
            <View style={styles.mainDetail}>

            <View style={{margin:30 ,height:"5%"}}>
                <Text style={{fontSize:25,letterSpacing:1}}>Requirenments</Text>
            </View>


            <View style={{flexDirection:"row",marginTop:10,paddingHorizontal:10,justifyContent:"space-between",height:"10%"}}>
               <HorizantalBar icon={icons.sun} percentage={"40%"}/>
               <HorizantalBar icon={icons.drop} percentage={"70%"}/>
               <HorizantalBar icon={icons.temperature} percentage={"90%"}/>
               <HorizantalBar icon={icons.garden} percentage={"50%"}/>
               <HorizantalBar icon={icons.seed} percentage={"10%"}/>
            </View>

            <View style={{marginTop:10,flexDirection:"column",justifyContent:"center",flex:1}}>
                <VerticalBar icon={icons.sun} label="SunLight" temp="15%"/>
                <VerticalBar icon={icons.drop} label="Water" temp="250 ml daily"/>
                <VerticalBar icon={icons.temperature} label="Room temprature" temp="25 C"/>
                <VerticalBar icon={icons.garden} label="Soil" temp="5 kg"/>
                <VerticalBar icon={icons.seed} label="Fertilizar" temp="150 Mg"/>

            </View>

            </View>
        {/* main end */}

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    headerDetail:{
    height:"30%"
    },
    mainDetail:{
        // flex:1,
        flex:1,
        marginTop:-30,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:COLORS.white
    },
}
)

export default PlantDetail;