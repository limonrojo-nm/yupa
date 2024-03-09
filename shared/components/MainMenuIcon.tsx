
import React from 'react'
import Text from 'shared/components/Text'
import View from 'shared/components/View'
import { useTheme } from 'styles/theme'
import { Link } from 'expo-router'
import { Pressable } from 'react-native'

interface IProps {
  label: string
  icon: string
  href: string
}

const MainMenuIcon = ({ label, href, icon }:IProps) => {
  const t = useTheme()
  return (
    <Link href={href} push asChild style={{ flex:1 }}>
      <Pressable>
        <View style={{ alignItems:'center' }}>
          <View style={{
            width: 35,
            height: 35,
            borderRadius: 10,
            borderColor: t.colors.elementText,
            borderWidth: 2,
            marginBottom: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{ color:t.colors.elementText, textAlign:'center' }}>{icon.slice(0, 1)}</Text>
          </View>
          <Text style={{
            color:t.colors.elementText,
            fontSize: 12,
            textAlign: 'center',
          }}>{label}</Text>
        </View>
      </Pressable>
    </Link>
  )
}

export default MainMenuIcon
