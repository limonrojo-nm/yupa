import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styles/theme'
import BasicFooter from './components/BasicFooter'


SplashScreen.preventAutoHideAsync()

const HomeLayout = () => {
  const t = useTheme()
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('assets/fonts/Poppins-Bold.ttf'),
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return <SafeAreaView
    onLayout={onLayoutRootView}
    style={{
      flex:1,
      backgroundColor:t.colors.mainBackground,
    }}
  >
    <Slot />
    <BasicFooter />

    <StatusBar style='auto' />
  </SafeAreaView>
}

export default HomeLayout
