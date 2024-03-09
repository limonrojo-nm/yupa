import React, { ComponentPropsWithRef } from 'react'
import Text from 'shared/components/Text'

type TProps = ComponentPropsWithRef<typeof Text>

const ScreenTitle = ( { children, ...props }:TProps) => {
  return <Text {...props} style={{ fontSize:25 }}>{children}</Text>
}

export default ScreenTitle
