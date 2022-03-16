import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Surface, Appbar, Title, Divider } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg'
import dayjs from 'dayjs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const colorMap = ['#85e085', '#ff6666', '#ffff80']

const Code = ({ navigation }) => {
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

  const goToRecord = () => {
    console.log('navigation', navigation);
    navigation.navigate('Vaccination');
  }
  
  return (
    <View style={style.container}>
      <Appbar.Header>
        <Appbar.Content title='Health Code' />
      </Appbar.Header>
      <Surface style={style.codeBox}>
        <View style={style.name}>
          <Title style={style.nametext}>Your Name</Title>
        </View>
        <View style={style.code}>
          <QRCode color={codeColor} size={150} style={style.code} value='https://www.google.com' />
        </View>
        <View style={style.timer}>
          <Text style={style.timerText}>{curTime}</Text>
        </View>
        <View style={style.goToVaccination}>
          <View style={style.vaccinationBox}>
            <Text style={style.vaccinationText} onPress={() => {goToRecord()}}>Vaccination Record</Text>
            <MaterialCommunityIcons style={style.arrow} size={20} name='chevron-right' />
          </View>
          <Divider />
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
    elevation: 4,
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
  },
  goToVaccination: {
    width: 270,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  vaccinationBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vaccinationText: {
    height: 50,
    fontSize: 16,
    textAlignVertical: 'center',
    flex: 8,
  },
  arrow: {
    flex: 1
  }
})

export default Code;