import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Surface, Appbar } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg'
import dayjs from 'dayjs';

const colorMap = ['#85e085', '#ff6666', '#ffff80']

const Code = () => {
  const [codeColor, setCodeColor] = useState(colorMap['yellow']);
  const [curTime, setCurTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  useEffect(() => {
    const timer = setInterval(() => {
      setCurTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000);
    let colorNum = Number(dayjs().unix()) % 3;
    setCodeColor(colorMap[colorNum]);
    return () => {
      clearInterval(timer);
    }
  }, [])
  
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
        <View style={style.timer}>
          <Text style={style.timerText}>{curTime}</Text>
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
  },
  timer: {
    marginTop: 20,
  },
  timerText: {
    fontSize: 20,
  }
})

export default Code;