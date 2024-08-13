import { Text, View } from 'react-native';
//import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
//import { Colors } from 'react-native/Libraries/NewAppScreen';

/*Opcion 1*/
export default function App(){
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora ADSO!</Text>
      <StatusBar style='auto' />
      <Link href='../home' style={{ color: 'blue'}} > Go to Home </Link>
    </View>
  );
} 

/*Opcion 2
export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.text} >Aora ADSO</Text>
      <StatusBar style='auto' />
      <Link href='/profile' style={{ color: 'blue' }}>Go to Profile</Link>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
})
*/