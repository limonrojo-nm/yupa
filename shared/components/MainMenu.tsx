
import React from 'react'
import View from 'shared/components/View'
import MainMenuIcon from 'shared/components/MainMenuIcon'
import { useTheme } from 'styles/theme'

const routes = [
  { name: 'Inicio', icon: 'inicio', href: '/' },
  { name: 'Proyectos', icon: 'Proyectos', href: '/projects' },
  { name: 'Piezas', icon: 'piezas', href: '/' },
  { name: 'Audios', icon: 'audios', href: '/' },
  { name: 'Textos', icon: 'textos', href: '/' },
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
