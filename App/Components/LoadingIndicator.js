import React from 'react'

import { ActivityIndicator } from 'react-native'

const LoadingIndicator = ({ size, color, style }) => (
  <ActivityIndicator
    size={size ? size : 'large'}
    color={color ? color : 'royalblue'}
    style={[{ flex: 1, width: '100%' }, style]}
  />
)

export default LoadingIndicator
