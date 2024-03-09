import React, { ComponentPropsWithRef, FC } from 'react'
import { View as RN_View } from 'react-native'

type TProps = ComponentPropsWithRef<typeof RN_View>

const View:FC<TProps> = ({ ...props }) => {
  return <RN_View {...props} />
}

export default View
