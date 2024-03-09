
import React from 'react'
import { StyleSheet  } from 'react-native'
import Text from 'shared/components/Text'
import View from 'shared/components/View'

const HomeScreen = () => {
  return (
    <View style= { styles.container } >
      <Text>HOME screen</Text>
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
