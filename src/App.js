import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.font40}>App!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font40: {
    fontSize: 40,
  }
})