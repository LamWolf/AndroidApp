import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './pages/login';
import Home from './pages/home';

const Tab = createMaterialBottomTabNavigator();
const Index = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'> 
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Index;