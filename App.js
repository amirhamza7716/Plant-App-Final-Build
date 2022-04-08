import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  PlantDetail} from './src/screens/index';
import TABS from './src/navigation/tab' ;
const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
    <Stack.Navigator  
    screenOptions={{headerShown:false}}
    initialRouteName='Home'
    >
    <Stack.Screen  name="Home" component={TABS} />
    {/* <Stack.Screen  name="Home" component={Home} options={{headerShown:false}} /> */}

    <Stack.Screen  name="PlantDetail" component={PlantDetail} />

    </Stack.Navigator>
 </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
