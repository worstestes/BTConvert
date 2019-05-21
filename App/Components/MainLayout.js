import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, StyleSheet, ViewPropTypes } from 'react-native'
import Header from './Header'

import { withNavigation } from 'react-navigation';

class MainLayout extends Component {
  render() {
    const {
    title,
      children,
      containerStyle,
      navigation: { openDrawer }
    } = this.props
    return (
      <SafeAreaView style={[styles.mainContainer, containerStyle]}>
        <Header title={title} onMenuPress={() => openDrawer()}>
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
}

export default withNavigation(MainLayout)