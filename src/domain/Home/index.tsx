import React from 'react';
import { View, Text } from 'react-native';
import Right from '../../../assets/svgs/ChevronRight.svg';

export function HomeScreen() {
  return (
    <View className='flex-1 bg-green-500 justify-center items-center'>
      <Right width={48} height={48} color="white" />
      <Text className='text-white text-xl mt-4'>Home Screen</Text>
    </View>
  );
}