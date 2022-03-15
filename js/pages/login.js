import React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Login = ({ navigation }) => {
  const navigateTo = () => {
    navigation.navigate('Home');
  }
  return (
    <View>
      <TextInput placeholder='Account' />
      <Button mode="contained" onPress={() => navigateTo()}>Sign In</Button>
    </View>
  )
}

export default Login;