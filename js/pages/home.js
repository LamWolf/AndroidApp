import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Code from './code';
import Vaccination from './vaccination';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName='Code'>
      <Stack.Screen options={{ headerShown: false }} name="Code" component={Code} />
      <Stack.Screen options={{ title: 'Vaccination Record' }} name="Vaccination" component={Vaccination}/>
    </Stack.Navigator>
  )
}

export default Home;