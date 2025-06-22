import React from 'react';
import { View, Text } from 'react-native';
import Right from '../../../assets/svgs/ChevronRight.svg';

export function HomeScreen() {
  return (
    <View className='flex-1 bg-green-500 justify-center items-center'>
      <Right width={48} height={48} color="white" />
      <Text className='text-white text-xl mt-4 font-p'>Pretendard Regular</Text>
      <Text className='text-white text-xl mt-4 font-p-semibold'>Pretendard SemiBold</Text>
      <Text className='text-white text-xl mt-4 font-p-extrabold'>Pretendard ExtraBold</Text>
      <Text className='text-white text-xl mt-4 font-p-black'>Pretendard Black</Text>
    </View>
  );
}