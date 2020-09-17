import React, { useState } from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import moment from 'moment'

import ButtonTimer from '../ButtonTimer';


const Timer = () => {
  const [count, setCount] = useState(0)

  const pressToIncrement = () => {
    return setCount(count + 1)
  }

  const pressToDecrement = () => {
    if (count <= 0) {
      return Alert.alert('Não pode ser menos de 0')
    }

    return setCount(count - 1)
  }

  const date = moment().format('LT')
  console.log(date)


  return(
    <View style={styles.container}>
      <Text style={styles.hour}>{date}</Text>
      <View style={styles.buttonContainer}>
        <ButtonTimer onPress={pressToIncrement} title='+'/>
        <ButtonTimer onPress={pressToDecrement} title='-'/>
      </View>
    </View>
  ) 
}


export default Timer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  hour: {
    fontWeight: '700',
    fontSize: 40
  },
  buttonContainer:{
    flexDirection: 'row'
  }
})