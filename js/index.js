import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './pages/login';
import Home from './pages/home';

const Tab = createMaterialBottomTabNavigator();
const Index = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        barStyle={{ backgroundColor: '#6200ee' }}
        > 
        <Tab.Screen options={{ tabBarIcon:({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} /> }} name="Home" component={Home} />
        <Tab.Screen options={{ tabBarIcon:({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} /> }} name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Index;