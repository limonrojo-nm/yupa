
import React from 'react'
import Screen from 'shared/components/Screen'
import ScreenTitle from 'shared/components/ScreenTitle'
import Text from 'shared/components/Text'
import View from 'shared/components/View'


const HomeScreen = () => {
  return <Screen>
    <Screen.Header>
      <Text>¡Hola Nico!</Text>
      <ScreenTitle>¿Qué querés hacer hoy?</ScreenTitle>
    </Screen.Header>
    <Screen.Content>
      <View>
        <View></View>
        <View>
          <View></View>
          <View>
            <View></View>
            <View></View>
          </View>
        </View>
      </View>
    </Screen.Content>
  </Screen>
}

export default HomeScreen
