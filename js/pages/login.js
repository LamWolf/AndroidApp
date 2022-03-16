import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Login = ({ navigation }) => {
  const navigateTo = () => {
    navigation.navigate('Home');
  }
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [accountError, setAccountError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const onBlurAccount = () => {
    setAccountError(account === '');
  }
  const onBlurPassword = () => {
    setPasswordError(password === '');
  }
  return (
    <View>
      <TextInput
        style={style.account}
        label={'Account'}
        mode='outlined'
        placeholder='Input your account'
        error={accountError}
        value={account}
        onChangeText={setAccount}
        onBlur={onBlurAccount}
      />
      <TextInput
        secureTextEntry
        style={style.password}
        label={'Password'}
        mode='outlined'
        placeholder='Input your password'
        error={passwordError}
        value={password}
        onChangeText={setPassword}
        onBlur={onBlurPassword}
      />
      <Button style={style.button} mode="contained" onPress={() => navigateTo()}>Sign In</Button>
    </View>
  )
}


const style = StyleSheet.create({
  account: {
    marginHorizontal: 15,
    marginTop: 30,
  },
  password: {
    marginHorizontal: 15,
    marginTop: 5,
  },
  button: {
    marginHorizontal: 15,
    marginTop: 50,
  }
})

export default Login;