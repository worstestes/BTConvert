import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, ScrollView, Image, StyleSheet, ViewPropTypes } from 'react-native'
import Header from './Header'
let chevron = require('../Images/chevron.png')

class MainLayout extends Component {
  state = {
  }

  render() {
    const {
    title,
      listStyle,
      children,
      style,
      menuEnabled,
      onTitlePress
    } = this.props
    const sortMenuIcon = <Image source={chevron} style={{width: 25, height: 25, transform: [{ rotate: menuEnabled ? '180deg' : '0deg'}]}} resizeMode='contain' />

    return (
      <SafeAreaView style={styles.mainContainer}>
        <Header title={title} onTitlePress={onTitlePress}>
            {sortMenuIcon}
        </Header>
            {children}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
})

MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MainLayout