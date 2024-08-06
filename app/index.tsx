import { Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App(){
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Aora ADSO!</Text>
      <StatusBar style='auto' />
      <Link href="../profile" style={{ color: 'blue'}} >Go to profile </Link>
    </View>
  );
}
