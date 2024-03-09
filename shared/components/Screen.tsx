import React, { ReactNode } from 'react'
import View from 'shared/components/View'
import HorizontalWrapper from 'shared/components/HorizontalWrapper'


interface IHeaderProps{
  children: ReactNode
}

const Header = ({ children }:IHeaderProps) => {
  return (
    <View style={{ paddingTop:70 }}>
      <HorizontalWrapper>
        {children}
      </HorizontalWrapper>
    </View>
  )
}

interface IContentProps{
  children?: ReactNode
}

const Content = ({ children }:IContentProps) => {
  return (
    <View style={{ paddingTop:70 }}>
      <HorizontalWrapper>
        {children}
      </HorizontalWrapper>
    </View>
  )
}

interface IProps {
  children: ReactNode
}

const Screen = ({ children }:IProps) => {
  return (
    <View style={{ flex:1 }}>
      {children}
    </View>
  )
}

Screen.Header = Header
Screen.Content = Content

export default Screen
