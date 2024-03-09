import { Text as RN_Text, StyleSheet } from 'react-native'
import React, { ComponentPropsWithRef, FC } from 'react'

// extract props from Text
type TProps = ComponentPropsWithRef<typeof RN_Text>

const Text:FC<TProps> = ({ style, ...props }) => {
  return <RN_Text {...props} style={
    StyleSheet.flatten([style, { fontFamily: 'Poppins-Regular' }])
  } />
}

export default Text
