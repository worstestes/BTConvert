import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, StyleSheet, ViewPropTypes } from 'react-native'
import Header from './Header'
import Icon from './Icon'

import { withNavigation } from 'react-navigation';

let chevron = require('../Images/chevron.png')

class MainLayout extends Component {
  render() {
    const {
    title,
      children,
      menuEnabled,
      onTitlePress,
      containerStyle,
      navigation: { openDrawer }
    } = this.props
    const sortMenuIcon = onTitlePress ? <Icon source={chevron} imageStyle={{transform: [{ rotate: menuEnabled ? '180deg' : '0deg'}]}} onPress={onTitlePress} /> : null

    return (
      <SafeAreaView style={[styles.mainContainer, containerStyle]}>
        <Header title={title} onMenuPress={() => openDrawer()}>
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
    alignItems: 'center',
    backgroundColor: '#EFEFEF'
  },
})

MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
  containerStyle: ViewPropTypes.style,
  menuEnabled: PropTypes.bool,
  onTitlePress: PropTypes.func,
}

export default withNavigation(MainLayout)