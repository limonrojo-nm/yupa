
import React from 'react'
import View from 'shared/components/View'
import MainMenuIcon from 'shared/components/MainMenuIcon'
import { useTheme } from 'styles/theme'

const routes = [
  { name: 'Inicio', icon: 'home', href: '/' },
  { name: 'Proyectos', icon: 'home', href: '/' },
  { name: 'Piezas', icon: 'home', href: '/' },
  { name: 'Audios', icon: 'home', href: '/' },
  { name: 'Textos', icon: 'home', href: '/' },
]

const MainMenu = () => {
  const t = useTheme()

  return (
    <View style={{
      backgroundColor: t.colors.elementBackground,
      height: 90,
      borderTopLeftRadius: t.borderRadius,
      borderTopRightRadius: t.borderRadius,
      flexDirection:'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop:5,
      alignItems: 'center',
    }}>
      {routes.map((route, index) => (
        <MainMenuIcon key={index} label={route.name} icon={route.icon} href={route.href}  />
      ))}
    </View>
  )
}

export default MainMenu
