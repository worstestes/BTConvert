import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import MainText from './MainText'

class Header extends Component {
  render() {
    const { title, titleStyle, children, onTitlePress } = this.props

    const headerTitle = title ? (
      <MainText style={titleStyle ? titleStyle : styles.headerText}>{title}</MainText>
    ) : null
    return (
      <View style={[styles.container]}>
        <View style={styles.header}>
          {headerTitle}
          <TouchableOpacity onPress={onTitlePress}>
          {children}
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ED9095',


  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.9,   
    color: '#1F0A2E' 
  },
})

Header.propTypes = {
  //   icons: PropTypes.string,
}

export default Header
