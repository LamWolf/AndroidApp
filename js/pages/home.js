import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Surface, Appbar } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg'

const colorMap = {
  green: '#85e085',
  red: '#ff6666',
  yellow: '#ffff80',
}

const Home = () => {
  const [codeColor, setCodeColor] = useState(colorMap['yellow']);
  return (
    <View style={style.container}>
      <Appbar.Header>
        <Appbar.Content title='Health Code' />
      </Appbar.Header>
      <Surface style={style.codeBox}>
        <View style={style.name}>
          <Text style={style.nametext}>Your Name</Text>
        </View>
        <View style={style.code}>
          <QRCode color={codeColor} size={150} style={style.code} value='https://www.google.com' />
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
  name: {
    marginVertical: 10,
  },
  nametext: {
    fontSize: 20,
  },
  code: {
    marginTop: 10,
  }
})

export default Home;