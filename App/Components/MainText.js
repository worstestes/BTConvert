import React from 'react'
import PropTypes from 'prop-types'

import { Text, StyleSheet } from 'react-native'

import { textColor } from '../Theme/Colors'

const MainText = ({ style, children, highlight, highlightColor, onPress }) => (
  <Text
    style={[
      styles.text,
      style,
      highlight ? { color: highlightColor ? highlightColor : 'yellow' } : null,
    ]}
    onPress={onPress}
  >
    {children}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
    color: textColor,
    fontSize: 14,
  },
})

MainText.propTypes = {
  children: PropTypes.node,
  highlight: PropTypes.bool,
  highlightColor: PropTypes.string,
}

export default MainText
