
import React from 'react'
import Text from 'shared/components/Text'
import View from 'shared/components/View'
import { useTheme } from 'styles/theme'

interface IProps {
  label: string
  icon: string
  href: string
}

const MainMenuIcon = ({ label }:IProps) => {
  const t = useTheme()
  return (
    <View style={{ flex:1, alignItems:'center' }}>
      <View style={{
        width: 35,
        height: 35,
        borderRadius: 10,
        borderColor: t.colors.elementText,
        borderWidth: 2,
        marginBottom: 5,
      }} />
      <Text style={{
        color:t.colors.elementText,
        fontSize: 12,
        textAlign: 'center',
      }}>{label}</Text>
    </View>
  )
}

export default MainMenuIcon
