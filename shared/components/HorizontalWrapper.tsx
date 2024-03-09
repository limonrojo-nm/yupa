
import React, { FC, ReactNode } from 'react'
import View from 'shared/components/View'

const HorizontalWrapper: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <View style={{ paddingHorizontal:20 }}>
      {children}
    </View>
  )
}


export default HorizontalWrapper
