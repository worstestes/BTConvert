import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ViewPropTypes, StyleSheet } from 'react-native'

import MainText from './MainText'
import Icon from './Icon'

const menu = require('../Images/menu.png')

class Header extends Component {
  render() {
    const { title, titleStyle, children, onMenuPress } = this.props
    const menuIcon = <Icon source={menu} containerStyle={{ position: 'absolute', left: 12 }} onPress={onMenuPress} />

    const headerTitle = title ? (
      <MainText style={titleStyle ? titleStyle : styles.headerText}>{title}</MainText>
    ) : null
    return (
      <View style={[styles.container]}>
        {menuIcon}
        <View style={styles.header}>
          {headerTitle}
          {children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ED9095',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 5,
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
    color: '#1F0A2E',
  },
})

Header.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: ViewPropTypes.style,
  children: PropTypes.node,
  onMenuPress: PropTypes.func
}

export default Header
