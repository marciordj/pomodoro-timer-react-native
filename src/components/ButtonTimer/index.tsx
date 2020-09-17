import React from 'react';
import {Button, View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
  onPress: () => void;
  title: string;
}

const ButtonTimer = ({onPress, title}: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button} >
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}


export default ButtonTimer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 5
  }
})