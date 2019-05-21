import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, ViewPropTypes } from 'react-native'

const LoadingIndicator = ({ size, color, style }) => (
  <ActivityIndicator
    size={size ? size : 'large'}
    color={color ? color : 'royalblue'}
    style={[{ flex: 1, width: '100%' }, style]}
  />
)

LoadingIndicator.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  style: ViewPropTypes.style,
}

export default LoadingIndicator
