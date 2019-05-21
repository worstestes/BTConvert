import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import MainText from './MainText'

const InfoText = ({ title, text }) => (
    <View style={styles.container}>
    <MainText style={styles.infoTitle}>{title}</MainText>
    <MainText style={styles.infoText}>{text}</MainText>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginBottom: 5,
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: 'coral',
  },
  infoText: {
    lineHeight: 25,
    letterSpacing: 0.3,
    marginTop: 7,
    marginBottom: 20,
    fontSize: 13
  },
})

InfoText.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default InfoText
