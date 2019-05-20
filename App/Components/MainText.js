import React from 'react'
import PropTypes from 'prop-types'

import { Text, Platform, StyleSheet } from 'react-native'

import { textColor } from '../Theme/Colors'

const MainText = ({
  style,
  children,
  highlight,
  highlightColor,
  bold,
  onPress,
}) => {

  return (
    <Text
      style={[
        styles.text,
        style,
        highlight
          ? { color: highlightColor ? highlightColor : 'yellow' }
          : null,
        bold ? { fontWeight: 'bold' } : null,
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  )
}

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
