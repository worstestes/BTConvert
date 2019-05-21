import React from 'react'
import { View, StyleSheet } from 'react-native'

import Icon from './Icon'
import MainText from './MainText'

const logoSource = require('../Images/logo.png')

const Logo = ({ showText, imageStyle }) => (
  <View style={styles.container}>
    <Icon source={logoSource} imageStyle={[{ width: 100, height: 100 }, imageStyle]} />
    {showText ? <MainText style={styles.text}>BTConversion</MainText> : null}
  </View>
)

const styles = StyleSheet.create({
  container: { width: '100%', height: 150, justifyContent: 'center', alignItems: 'center' },
  logo: { width: 100, height: 100 },
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    letterSpacing: 0.85,
    color: '#1F0A2E',
    position: 'absolute',
    bottom: 15,
  },
})

export default Logo
