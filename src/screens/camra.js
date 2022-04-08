import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const Camra = () =>{
    return(
        <View style={styles.container}>
            <Text>Hello Camra</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  export default Camra;