import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Paridade from './components/Paridade'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Paridade numero={32} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})