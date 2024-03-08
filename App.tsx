import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style= { styles.container } >
      <Text>Hola</Text>
      <StatusBar style = "auto" />
    </View>
  )
}

export default App

const white = '#fff'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
  },
})
