import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
} from 'react-native'

import MainText from './MainText'


class Header extends Component {
  render() {
    const {
        title,
        titleStyle,
        children
    } = this.props

    const headerTitle = title ? <MainText style={titleStyle ? titleStyle : styles.headerText}>{title}</MainText> : null

    return (
      <View
        style={[
          styles.container,
        ]}
      >
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral'
  },
  headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: .9
  }
})

Header.propTypes = {
//   icons: PropTypes.string,
}

export default Header
