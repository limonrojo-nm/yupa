import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style= { styles.container } >
      <Text>HOME screen</Text>
      <StatusBar style = "auto" />
    </View>
  )
}

export default HomeScreen

const white = '#fff'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
  },
})
