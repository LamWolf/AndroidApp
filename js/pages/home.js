import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Surface, Appbar } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg'

const Home = () => {
  return (
    <View style={style.container}>
      <Appbar.Header>
        <Appbar.Content title='Health Code' />
      </Appbar.Header>
      <Surface style={style.codeBox}>
        <View style={style.code}>
          <QRCode color={'#ff6666'} size={150} style={style.code} value='https://www.google.com' />
        </View>
      </Surface>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  codeBox: {
    flex: 9,
    marginVertical: 20,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  code: {
    marginTop: 20,
  }
})

export default Home;